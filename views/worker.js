onmessage = function(event) {  
  var id   = event.data.id;
  var data = event.data.data;
  var func = eval("res = " + event.data.func);

  var res = func(data);

  postMessage({ id: id, data: res });
};

