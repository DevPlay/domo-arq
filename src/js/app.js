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

$(document).ready(function () {
  $('#owl-domo').owlCarousel({
    loop: true,
    navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
  $(window).scroll(function () {
    console.log();
    if ($(this).scrollTop() > 400 && this.innerWidth < 992) {
      $('.top-scroller').fadeIn();
    } else {
      $('.top-scroller').fadeOut();
    }
  });
  // Click event to scroll to top
  $('.top-scroller').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
    return false;
  });
});

class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <footer>
        <div class="col-xs-12 col-md-12 col-lg-12" style="background-color: #000029;">
          <div class="designed-by">
            <p>
              Copyright © 2019 - Buenos Aires - designed by
              <a href="https://www.devplay.com.ar">
                <img src="./images/Recurso 2.svg" alt="Logo DevPlay"
              /></a>
            </p>
          </div>
        </div>
      </footer>
        `;
  }
}
customElements.define('footer-custom', Footer);
