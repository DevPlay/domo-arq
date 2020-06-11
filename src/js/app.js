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

  // Cache selectors
  let lastId;
  const topMenu = $('#side-menu');
  const topMenuHeight = topMenu.outerHeight() + 15;
  // All list items
  const menuItems = topMenu.find('a');
  // Anchors corresponding to menu items
  const scrollItems = menuItems.map(function () {
    const item = $($(this).attr('href'));
    if (item.length) {
      return item;
    }
  });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function (e) {
    const href = $(this).attr('href');
    const offsetTop = href === '#' ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate(
      {
        scrollTop: offsetTop,
      },
      300,
    );
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function () {
    // Get container scroll position
    const fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    let cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop) return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    const id = cur && cur.length ? cur[0].id : '';

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent()
        .removeClass('menu-transition')
        .end()
        .filter(`[href='#${id}']`)
        .parent()
        .addClass('menu-transition');
    }
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
