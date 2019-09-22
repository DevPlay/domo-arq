import '../styles/index.scss';
import '../styles/master.scss';
import '../styles/seccion_equipo.scss';
// import $ from 'jquery';
import $ from 'jquery';
// import 'popper.js';
import 'bootstrap';

// Menu

// $(document).ready(function () {
//     $(document).on("scroll", onScroll);

//     //smoothscroll
//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");

//         $('a').each(function () {
//             $(this).removeClass('active');
//         });
//         $(this).addClass('active');

//         var target = this.hash,
//             menu = target;
//         $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top + 2
//         }, 500, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//     });
// });

// function onScroll(event) {
//     var scrollPos = $(document).scrollTop();
//     $('ul li a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('ul li a').removeClass("active");
//             currLink.addClass("active");
//         }
//         else {
//             currLink.removeClass("active");
//         }
//     });
// }

$('.mat-input').focus(function() {
  $(this)
    .parent()
    .addClass('is-active is-completed');
});

$('.mat-input').focusout(function() {
  if ($(this).val() === '')
    $(this)
      .parent()
      .removeClass('is-completed');
  $(this)
    .parent()
    .removeClass('is-active');
});
