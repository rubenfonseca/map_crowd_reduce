function smessage(m){
  document.getElementById("status").innerHTML += '<p>' + m + '</p>';
}

function supports_web_workers() { return !!window.Worker; }


