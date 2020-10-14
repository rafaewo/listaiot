## Sensor de luminosidade lâmpada virtual

Sensor que mostra a quantidade de luminosidade recebida pela câmera frontal de um smartphone android utilizando *ThingSpeak* e *droidScript*.

Código para o sensor de luz no droidScript: 
```javascript
luxG = 0;
function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );
    
    txt = app.CreateText("", 0.8, 0.3);
    txt.SetTextSize(22);
    lay.AddChild(txt);
    
    sns = app.CreateSensor( "Light" );
    sns.SetOnChange(senseChange);
    sns.Start();
    
    setInterval(sendToAPI, 10000);
    
    app.AddLayout(lay);
}

function sendToAPI() {
    const http = new XMLHttpRequest();
    http.open('GET', 'https://api.thingspeak.com/update?api_key={your ThingSpeak Write API Key here}'+luxG);
    http.send();
    http.onload = setLuxText(http.responseText, luxG);
}

function senseChange(lux) {
    luxG = lux;
}

function setLuxText(resp, lux) {
    txt.SetText(resp+ "level = "+ lux+ "lux");
}
```
