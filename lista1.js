function mudar() {
	
	var i;
	for(i=0; i<10; i++){
		var para = document.createElement("p");
		var node = document.createTextNode("mudou: "+i);
		para.appendChild(node);
		
		var element = document.getElementById("result");
		element.appendChild(para)+i;
	}
}

function fon() {
	document.getElementById("luz1").src="./Lon.png";
}

function foff() {
	document.getElementById("luz1").src="./Loff.png";
}

function toggle() {
  var x = document.getElementById("luz2").src;
  if (x.indexOf("Loff.png")!=-1) {
    document.getElementById("luz2").src  = './Lon.png';
  } else {
	  document.getElementById('luz2').src  = './Loff.png';
  }
}

function toggle1() {
  var x = document.getElementById("luz3").src;
  if (x.indexOf("Loff.png")!=-1) {
    document.getElementById("luz3").src  = './Lon.png';
  } else {
	  document.getElementById('luz3').src  = './Loff.png';
  }
}
function toggle2() {
  var x = document.getElementById("luz4").src;
  if (x.indexOf("Loff.png")!=-1) {
    document.getElementById("luz4").src  = './Lon.png';
  } else {
	  document.getElementById('luz4').src  = './Loff.png';
  }
}
function toggle3() {
  var x = document.getElementById("luz5").src;
  if (x.indexOf("Loff.png")!=-1) {
    document.getElementById("luz5").src  = './Lon.png';
  } else {
	  document.getElementById('luz5').src  = './Loff.png';
  }
}
function toggle4() {
  var x = document.getElementById("luz6").src;
  if (x.indexOf("Loff.png")!=-1) {
    document.getElementById("luz6").src  = './Lon.png';
  } else {
	  document.getElementById('luz6').src  = './Loff.png';
  }
}

