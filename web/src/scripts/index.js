<<<<<<< HEAD
/* eslint-disable prettier/prettier */
/* eslint-disable func-names */
import '../styles/master.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap';
import 'owl.carousel';
import $ from 'jquery';
// import 'popper.js';

let document;
$(document).ready(function () {
    $('#owl-demo').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        // autoHeightClass: owl-height,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            },
        }
    });
});
=======
import 'bootstrap';
// import $ from 'jquery';
import '../styles/master.scss';
import 'popper.js';
>>>>>>> 28062bf5c76764e79b3d209cdecf78e4c244384b

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
// TODO: este es el codigo que la flasheaba
// $('.mat-input').focus(function () {
// $(this)
//     .parent()
//     .addClass('is-active is-completed');
// });

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
