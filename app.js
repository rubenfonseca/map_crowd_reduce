
/**
 * Module dependencies.
 */

var express = require('express');
var form = require('connect-form');

var app = module.exports = express.createServer();
var fs = require('fs');
var uuid = require('uuid');

var Sandbox = require('sandbox');

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.use(express.cookieDecoder());
  app.use(express.session());
  app.use(require('connect-form')({keepExtensions: true}));
  app.use(express.compiler({ src: __dirname + '/public', enable: ['less'] }));
  app.use(app.router);
  app.use(express.staticProvider(__dirname + '/public'));
  app.set('view engine', 'haml');
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

var state = {};

// Socket.io
var io = require('socket.io');
var socket = io.listen(app);
socket.on('connection', function(client) {
  client.on('message', function(data) {
    if(!state[data.uuid]) {
      console.log("!!! Client asked for something without a valid UUID");
      return;
    };

    if(data.message == "next_job") {
      console.log("Client " + client.sessionId + " asked for next job");

      if(state[data.uuid]['m_jobs'].length > 0) {
        var job = state[data.uuid]['m_jobs'].shift();

        console.log("Client " + client.sessionId + " received a new job " + data.uuid + " | " + job.id);
        client.send({message: 'process', job:job});
        state[data.uuid]['m_jobs'].push(job);
        return;
      } else {
        console.log("No job available for " + client.sessionId);
      }
    } else if(data.message == "job_completed") {
      var id = data.id;
      var u  = data.uuid;

      console.log("Client " + client.sessionId + " finished a job! " + u + " | " + id);

      for(var c in socket.clients) {
        socket.clients[c].send({message:"status", uuid:u, percentage:((state[u]['total_jobs'] - state[u]['m_jobs'].length) * 100) / state[u]['total_jobs']});
      }

      for(var i=0; i<state[u]['m_jobs'].length; i++) {
        if(state[u]['m_jobs'][i].id == id) {
          state[u]['m_jobs'].splice(i, 1);
        }
      }

      if(id == "r_job") {
        console.log("Reduce job finished :D");
        console.log(data.data);

        for(var c in socket.clients) {
          socket.clients[c].send({message:"result", data:data.data, uuid:u});
        }

        delete state[u];
      } else {
        state[u]['m_results'].push(data.data);

        if(state[u]['m_jobs'].length == 0) {
          console.log("Map phase finished :D");

          console.log("Sending terminate message to all clients");
          for(var c in socket.clients) {
            socket.clients[c].send({message:"stop", uuid:u});
          }

          var r_job = {
            data: state[u]['m_results'],
            id: 'r_job',
            func: state[u]['r'],
            uuid: u
          };
          state[u]['m_jobs'].push(r_job);
        }
      }
    } else if (data.message == 'monitor') {
      var u  = data.uuid;
      client.send({message:"status", uuid:u, percentage:((state[u]['total_jobs'] - state[u]['m_jobs'].length) * 100) / state[u]['total_jobs']});
      console.log("Someone is not doing any work (just monitoring progress)");
    } else {
      console.log("Unknown message " + data);
    }
  });
});

// Routes
app.get('/', function(req, res){
  res.render('index.haml', {
    locals: {
        title: 'Map Crowd Reduce',
        computations: state
    }
  });
});

app.post('/new_job', function(req, res) {
  req.form.complete(function(err, fields, files){
    if(!fields['s'] || !fields['map'] || !fields['reduce']) {
      res.redirect('/');
      return;
    }

    var Script = process.binding('evals').Script;

    var s;
    try { 
      s = new Script("res = " + fields['s']);
    } catch(e) {
      res.send("bad code on s function " + e.message);
      return;
    }

    var m = fields['map'];
    var r = fields['reduce'];

    var file_data = null;
    if(files['file']) {
      console.log("Reading input file " + files['file'].path);

      file_data = fs.readFileSync(files['file'].path);
    }

    var u = uuid.generate();
    state[u] = {};

    console.log("Slicing.....");
    var m_results = [];
    // Run slicing function in a sandbox
    var sandbox = new Sandbox();
    sandbox.run("(" + fields['s'] + ")()", function(output){console.log(output)});

    var m_jobs = s.runInNewContext({})(file_data);
    for(var i=0; i<m_jobs.length; i++) {
      m_jobs[i] = {
        id: i,
        data: m_jobs[i],
        func: m,
        uuid: u
      };
    }

    state[u]['m_results'] = m_results;
    state[u]['m_jobs'] = m_jobs;
    state[u]['total_jobs'] = m_jobs.length;
    state[u]['r'] = r;

    console.log("Redirecting to computation");

    res.redirect('/computation_ready/' + u);
  });
});

app.get('/computation_ready/:id', function(req, res) {
  res.render('ready.haml', {
    locals: {
      title: "READYYYYYYYY",
      uuid: req.params.id
    }
  });
});

app.get('/compute/:id', function(req, res) {
  res.render('compute.haml', {
    locals: {
      title: "Compute",
      uuid: req.params.id
    }
  });
});

app.get('/monitor/:id', function(req, res) {
  res.render('monitor.haml', {
    locals: {
      title: "Monitor",
      uuid: req.params.id
    }
  });
});

app.get('/worker.js', function(req, res) {
  res.sendfile(__dirname + "/views/worker.js");
});

// Only listen on $ node app.js

if (!module.parent) {
  app.listen(3000);
  console.log("Express server listening on port %d", app.address().port)
}

