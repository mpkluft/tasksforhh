//= task1.js
//= task2.js
//= task3.js
//= task4.js
//= task5.js
//= task6.js
//= task7.js

$.fn.extend({
	animateCss: function (animationName) {
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$(this).addClass('animated ' + animationName).one(animationEnd, function() {
			$(this).removeClass('animated ' + animationName);
		});
	}
});

function addEvent(el, e, handler){
	if(el.addEventListener){
		el.addEventListener(e, handler);
	} else if(el.attachEvent){
		el.attachEvent('on'+e, handler);
	} else {
		el['on'+e] = handler;
	}
}

function showWarning(){

	var warning = document.getElementsByClassName('warning__p')[0],
			getCSS = getComputedStyle(warning);

	if(getCSS.display == 'none') {
		warning.style.display = 'block';
		setTimeout(function(){
			warning.style.display = '';
		}, 2000);
	}
}


var handler = [];

handler[0] = function () {

	var time = document.getElementsByClassName('task0__time-span')[0],
	    result = document.getElementsByClassName('task0__result-span')[0];

	if(!time.hasChildNodes() && !result.hasChildNodes()) {

		var	resultTask = getResult(2),
	 			timeText = document.createTextNode(' ' + resultTask[1] + 'ms'),
	  		resultText = document.createTextNode(' ' + resultTask[0]);

		time.appendChild(timeText);
		time.style.background = '#f9b3b3';
		result.appendChild(resultText);
		result.style.background = '#f9b3b3';
	} else {
		showWarning();
	}
	
};

handler[1] = function () {

	var time = document.getElementsByClassName('task1__time-span')[0],
	    result = document.getElementsByClassName('task1__result-span')[0];

	if(!time.hasChildNodes() && !result.hasChildNodes()) {

		var	resultTask = wonderfullNumber(1, 3400000),
	  		timeText = document.createTextNode(' ' + resultTask[1] + 'ms'),
	  		resultText = document.createTextNode(' ' + resultTask[0]);

		time.appendChild(timeText);
		time.style.background = '#f9b3b3';
		result.appendChild(resultText);
		result.style.background = '#f9b3b3';
	} else {
		showWarning();
	}
};

handler[2] = function () {

	var time = document.getElementsByClassName('task2__time-span')[0],
	    result = document.getElementsByClassName('task2__result-span')[0];
	    
  if(!time.hasChildNodes() && !result.hasChildNodes()) {

  	var	resultTask = P(1155),
	  		timeText = document.createTextNode(' ' + resultTask[1] + 'ms'),
	  		resultText = document.createTextNode(' ' + resultTask[0]);

		time.appendChild(timeText);
		time.style.background = '#f9b3b3';
		result.appendChild(resultText);
		result.style.background = '#f9b3b3';
	} else {
		showWarning();
	}
};

handler[3] = function () {

	var time = document.getElementsByClassName('task3__time-span')[0],
	    result = document.getElementsByClassName('task3__result-span')[0];
	    
	if(!time.hasChildNodes() && !result.hasChildNodes()) {

		var	resultTask = getAB(3,100,3,126),
	  		timeText = document.createTextNode(' ' + resultTask[1] + 'ms'),
	  		resultText = document.createTextNode(' ' + resultTask[0]);

		time.appendChild(timeText);
		time.style.background = '#f9b3b3';
		result.appendChild(resultText);
		result.style.background = '#f9b3b3';
	} else {
		showWarning();
	}
};

handler[4] = function () {

	var time = document.getElementsByClassName('task4__time-span')[0],
	    result = document.getElementsByClassName('task4__result-span')[0];
	    

  if(!time.hasChildNodes() && !result.hasChildNodes()) {

  	var	resultTask = findPolindrom(13332),
	  		timeText = document.createTextNode(' ' + resultTask[1] + 'ms'),
	  		resultText = document.createTextNode(' ' + resultTask[0]);

		time.appendChild(timeText);
		time.style.background = '#f9b3b3';
		result.appendChild(resultText);
		result.style.background = '#f9b3b3';
	} else {
		showWarning();
	}
};

handler[5] = function () {

	var time = document.getElementsByClassName('task5__time-span')[0],
	    result = document.getElementsByClassName('task5__result-span')[0];
	    
	if(!time.hasChildNodes() && !result.hasChildNodes()) {

		var	resultTask = findS(860000, 870000),
	  		timeText = document.createTextNode(' ' + resultTask[1] + 'ms'),
	  		resultText = document.createTextNode(' ' + resultTask[0]);

		time.appendChild(timeText);
		time.style.background = '#f9b3b3';
		result.appendChild(resultText);
		result.style.background = '#f9b3b3';
	} else {
		showWarning();
	}
};

handler[6] = function () {

	var time = document.getElementsByClassName('task6__time-span')[0],
	    result = document.getElementsByClassName('task6__result-span')[0];

  if(!time.hasChildNodes() && !result.hasChildNodes()) {

  	var resultTask = findSumTask7(1091,1091),
	  timeText = document.createTextNode(' ' + resultTask[1] + 'ms'),
	  resultText = document.createTextNode(' ' + resultTask[0]);

		time.appendChild(timeText);
		time.style.background = '#f9b3b3';
		result.appendChild(resultText);
		result.style.background = '#f9b3b3';
	} else {
		showWarning();
	}
};




$(function () {

	var button = [],
			taskCount = document.getElementsByClassName('task').length;


	for (var i = 0; i < taskCount; i++) {

		button[i] = document.getElementById('task' + i);
		addEvent(button[i], 'click', handler[i]);
	}

});
