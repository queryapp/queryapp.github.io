(function($){
  $.fn.extend({
    rotaterator: function(options) {

      var defaults = {
        fadeSpeed: 500,
        pauseSpeed: 100,
        child:null
      };

      var options = $.extend(defaults, options);

      return this.each(function() {
        var o =options;
        var obj = $(this);
        var items = $(obj.children(), obj);
        items.each(function() {$(this).hide();})
        if(!o.child){var next = $(obj).children(':first');
        }else{var next = o.child;
        }
        $(next).fadeIn(o.fadeSpeed, function() {
        $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
          var next = $(this).next();
          if (next.length == 0){
            next = $(obj).children(':first');
          }
          $(obj).rotaterator({child : next, fadeSpeed : o.fadeSpeed, pauseSpeed : o.pauseSpeed});
      })
      });
      });
    }
  });
})(jQuery);


$(document).ready(function() {
  $('#rotate').rotaterator({fadeSpeed:500, pauseSpeed:1000});
  resizeResume();
  $(window).resize(function() {
    resizeResume();
  });
});

function resizeResume(){
    if($(window).height() < $(window).width()){
      $('.resume_frame').css('height', $(window).height()*.6);
    }else{
      $('.resume_frame').css('height', $(window).width()*.6);
    }
};

window.onscroll = function() {scrollFunction()};
window.addEventListener('click', hideMenuFunction);
window.addEventListener('scroll', hideMenuFunction);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("topBtn").style.display = "block";
  } else {
      document.getElementById("topBtn").style.display = "none";
  }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

function showMenuFunction() {
  $("#menu").show(500);
};

function hideMenuFunction(event) {
  if (!event.target.matches('#menuBtn')) {
    $("#menu").hide(500);
  }
};
