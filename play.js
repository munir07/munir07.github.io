var lights = 'on';

document.getElementById('lightSwitch').onclick = switchLights;
var background = document.getElementById('switchBacking');
var lightsVar = document.getElementById('lights');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function switchLights() {
    var col;
    if (lights == 'on') {
        lights = 'off';
        col = "black";
        //background.style = 'padding:50px; background: black;';
    } else {
        lights = 'on'; 
        col = getRandomColor();
        //background.style = 'padding:50px; background: col';
    }
    background.style = 'padding:50px; background: ' + col + ';';
    lightsVar.innerHTML = lights + "(" + col + ")";
}