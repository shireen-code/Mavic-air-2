$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    // console.log(windscroll);
    if (windscroll >= 100) {
        $('nav').addClass('fixed');
        $('.wrapper section').each(function(i) {
            if ($(this).position().top <= windscroll - 48) {
                $('.section-vertical nav a.active').removeClass('active');
                $('.section-vertical nav a').eq(i).addClass('active');
            }
        });

    } else {
        // console.log('here we go');
        $('.section-vertical nav').removeClass('fixed');
        $('.section-vertical nav a.active').removeClass('active');
        $('.section-vertical nav a:first').addClass('active');
    }

}).scroll();


$('.section-vertical nav li a').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 50;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);
    // $('.section-vertical nav li a').removeClass('active2');
    // $(this).addClass('active2');
    // setTimeout(function(){
    //     $('.section-vertical nav li a').removeClass('active');
    // } , 1000);
    return false;

})

$('button').on('click', function(){
  $('body').toggleClass('open');
});






// Script for sticky header OR add class on 1st scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});


// Page RoleBack to Top
$(document).ready(function(){
    $('.roleback').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
});


// Go Down
$(function() {
  $('.goDown').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});


// Wow Animation
new WOW().init();


//Dummy Script for Slick
$('.comp-slide').slick({
  dots: true,
  infinite: false,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


// Sky Sec Video

// Plugin isInViewport
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("jquery"),require("window")):"function"==typeof define&&define.amd?define("isInViewport",["jquery","window"],n):n(e.$,e.window)}(this,function(e,n){"use strict";function t(n){var t=this;if(1===arguments.length&&"function"==typeof n&&(n=[n]),!(n instanceof Array))throw new SyntaxError("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions");return n.forEach(function(n){"function"!=typeof n?(console.warn("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"),console.warn("isInViewport: Ignoring non-function values in array and moving on")):[].slice.call(t).forEach(function(t){return n.call(e(t))})}),this}function o(n){var t=e("<div></div>").css({width:"100%"});n.append(t);var o=n.width()-t.width();return t.remove(),o}function r(t,i){var a=t.getBoundingClientRect(),u=a.top,c=a.bottom,f=a.left,l=a.right,d=e.extend({tolerance:0,viewport:n},i),s=!1,p=d.viewport.jquery?d.viewport:e(d.viewport);p.length||(console.warn("isInViewport: The viewport selector you have provided matches no element on page."),console.warn("isInViewport: Defaulting to viewport as window"),p=e(n));var w=p.height(),h=p.width(),v=p[0].toString();if(p[0]!==n&&"[object Window]"!==v&&"[object DOMWindow]"!==v){var g=p[0].getBoundingClientRect();u-=g.top,c-=g.top,f-=g.left,l-=g.left,r.scrollBarWidth=r.scrollBarWidth||o(p),h-=r.scrollBarWidth}return d.tolerance=~~Math.round(parseFloat(d.tolerance)),d.tolerance<0&&(d.tolerance=w+d.tolerance),l<=0||f>=h?s:s=d.tolerance?u<=d.tolerance&&c>=d.tolerance:c>0&&u<=w}function i(n){if(n){var t=n.split(",");return 1===t.length&&isNaN(t[0])&&(t[1]=t[0],t[0]=void 0),{tolerance:t[0]?t[0].trim():void 0,viewport:t[1]?e(t[1].trim()):void 0}}return{}}e="default"in e?e.default:e,n="default"in n?n.default:n,/**
 * @author  Mudit Ameta
 * @license https://github.com/zeusdeux/isInViewport/blob/master/license.md MIT
 */
e.extend(e.expr[":"],{"in-viewport":e.expr.createPseudo?e.expr.createPseudo(function(e){return function(n){return r(n,i(e))}}):function(e,n,t){return r(e,i(t[3]))}}),e.fn.isInViewport=function(e){return this.filter(function(n,t){return r(t,e)})},e.fn.run=t});
//# isInViewport

// Play Video
$(function() {
  var $video = $('.video');
  var $window = $(window);

  $window.scroll(function() {
    if ($video.is(":in-viewport")) {
      $video[0].play();
    } else {
      $video[0].pause();
    }
  });

   


});



function openTab(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



var $links = $( '.nav-tabs' ).find( 'a' );

$links.on( 'click', function ( e ) {
    e.preventDefault();

  var group = $( this ).attr( 'href' ).replace( '#', '' );

  $( '.some-class' ).hide();
  $( '.some-class[data-id="' + group + '"]' ).show();
});
var media=document.querySelector('video');

btn.addEventListener("click",function(){
  media.currentTime = 0;
})
play.addEventListener("click", function(){
  media.play();
})