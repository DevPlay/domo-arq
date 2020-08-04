/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import '../scss/app.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/js/all';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import './components/footer.component';
import './components/sidebar.component';
import './components/sidebarNoIndex.component';

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

  $('#owl-domo-perdriel').owlCarousel({
    autoWidth:true,
    center:true,
    mergeFit:true,
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
  const menuItems = topMenu.find('a');
  const scrollItems = menuItems.map(function mapping() {
    const item = $($(this).attr('href'));
    if (item.length) {
      return item;
    }
    return null;
  });

  const topMenuNoIndex = $('#sideMenuNoIndex');
  const menuItemsNoIndex = topMenuNoIndex.find('a');

  menuItemsNoIndex.click(function urlLocation() {
    const location = $(this).pathname;
    const url = window.location.origin;
    window.location.replace(`${url}/${location}`);
  });

  menuItems.click(function animation(e) {
    const href = $(this).attr('href');
    const offsetTop = href === '#' ? 0 : $(href).offset().top - 0;
    $('html, body').stop().animate(
      {
        scrollTop: offsetTop,
      },
      1000,
      'swing',
    );
    e.preventDefault();
  });

  $(window).scroll(function scroll() {
    const fromTop = $(this).scrollTop() + topMenuHeight;
    let cur = scrollItems.map(function top() {
      if ($(this).offset().top < fromTop) return this;
      return null;
    });

    cur = cur[cur.length - 1];
    const id = cur && cur.length ? cur[0].id : '';

    if (lastId !== id) {
      lastId = id;

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
