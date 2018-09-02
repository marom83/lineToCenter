$(function(){
	
	var canvas = document.getElementById('MyCanvas');
	var context = canvas.getContext('2d');
	
	var random = function(max, min) {
	return Math.floor(Math.random()*(max-min+1)+min);
	}
	
	function lineToCenter(x, y, color) {
	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(canvas.width / 2, canvas.height / 2);
	context.strokeStyle = color;
	context.stroke();
	}
	
	var color = "#1ba09e";
	
	for (var i = 0; i < 100; i++) {
	var x = random(canvas.width, 0);
	var y = random(canvas.height, 0);
	lineToCenter(x, y, color);
	}
	
	});

