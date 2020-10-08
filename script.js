function fon() {
  document.getElementById("luz1").src="./on.jpg";
  signal = getRandInteger(200,1000)
  sendToAPI(signal)
}

function foff() {
  document.getElementById("luz1").src="./off.jpg";
  sendToAPI(0)
}

function toggle() {
  var x = document.getElementById("luz1").src;
  if (x.indexOf("off.jpg")!=-1) {
    document.getElementById("luz1").src  = './on.jpg';
    signal = getRandInteger(200,1000)
    sendToAPI(signal)
  } else {
    document.getElementById('luz1').src  = './off.jpg';
    sendToAPI(0)
  }
}

function blink() {
    var intervalo = 0;
    var cont = 0;
    var signal = 0;
    while(cont<10) {
        intervalo += 300;
        setTimeout("document.getElementById('luz1').src='on.jpg';",intervalo);
        intervalo += 300;
        setTimeout("document.getElementById('luz1').src='off.jpg';",intervalo);
        cont++;
        signal = getRandInteger(200,1000) + signal;        
    }
    sendToAPI(signal)
}

function sendToAPI(state) {
  const http = new XMLHttpRequest();
  http.open('GET', 'https://api.thingspeak.com/update?api_key=2GCK7KRKRD4134HY&field1=0'+state);
  http.send();
  http.onload = console.log(http.responseText+' '+state)
}

function getRandInteger(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}