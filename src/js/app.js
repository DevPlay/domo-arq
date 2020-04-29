/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
 import '../scss/app.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/js/all';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

(function (global) {
  global.$ = $;
  // eslint-disable-next-line no-undef
  global.jQuery = jQuery;
})(typeof window !== 'undefined' ? window : this);

// Your JS Code goes here
$('.mat-input').focus(function () {
  $(this).parent().addClass('is-active is-completed');
});

$('.mat-input').focusout(function () {
  if ($(this).val() === '') $(this).parent().removeClass('is-completed');
  $(this).parent().removeClass('is-active');
});
