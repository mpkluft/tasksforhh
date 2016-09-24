$(function(){

  $.fn.extend({
      animateCss: function (animationName) {
          var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          $(this).addClass('animated ' + animationName).one(animationEnd, function() {
              $(this).removeClass('animated ' + animationName);
          });
      }
  });
  //раскрытие меню .top-nav__ul по клику на бургер
  //поместить в ШТМЛ  div.burger  div.icon__burger
  $('.burger').click(function(){
    $(this).toggleClass('is-active')
    if($('.top-nav__ul').css('display') != 'block'){  
      $('.top-nav__ul').css('display', 'block').animateCss('bounceInDown');
      $('.autorization__ul').css('display', '');
    } else {
      $('.top-nav__ul').css('display', '');
    }
  });

});
