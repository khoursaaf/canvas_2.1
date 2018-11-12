var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(200,350);
ctx.lineTo(300,100);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle='red';
ctx.lineWidth=4;
ctx.moveTo(100,100);
ctx.quadraticCurveTo(200, -50, 300, 100);
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill()
ctx.closePath();