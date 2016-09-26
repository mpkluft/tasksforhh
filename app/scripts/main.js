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


$(function(){

  var button = document.getElementById("task1");
  console.log(button);
});
