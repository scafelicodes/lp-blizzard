var slide_thumbnail = new Swiper(".slide-thumbnail", {
  slidesPerView: 5,
  direction: 'vertical',
  spaceBetween: 20,
  wacthSlidesProgress: true,
  breakpoints: {
    320: {
      direction: 'horizontal'
    },
    991: {
      direction: 'vertical'
    },
  }
});

const progressSlide = document.querySelector('.js-progress');

var slide_hero = new Swiper(".slide-principal", {
    effect: 'fade',
    thumbs: {
      swiper: slide_thumbnail,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    on: {
      init: function() {
        progressSlide.classList.remove('animate');
        progressSlide.classList.remove('active');
        progressSlide.classList.add('animate');
        progressSlide.classList.add('active');
      },
      slideChangeTransitionStart: function() {
        progressSlide.classList.remove('animate');
        progressSlide.classList.remove('active');
        progressSlide.classList.add('active');
      },
      slideChangeTransitionEnd: function() {
        progressSlide.classList.add('animate');
      }
    }
  });
// Page games list
const allFilters = document.querySelectorAll('.js-nav-games li a');
const tabPane = document.querySelectorAll('.tab-pane-games');

allFilters.forEach((filter, index) => {
  filter.addEventListener('click', (event) => {
    event.preventDefault();

    allFilters.forEach(item => {
      item.classList.remove('active');
    });

    tabPane.forEach(tab => {
      tab.classList.remove('active');
    })

    tabPane[index].classList.add('active');

    filter.classList.add('active');
  })


});

const btnOpenModal = document.querySelector('.js-open-modal');
const btnCloseModal = document.querySelector('.js-close-modal');
const CloseModalOverlay = document.querySelector('.js-overlay-close');

btnOpenModal.addEventListener('click', (event) => {
  event.preventDefault();

  let tagHtml = document.documentElement;
  tagHtml.classList.add('show-modal');
  
});

btnCloseModal.addEventListener('click', () => {
  
  let tagHtml = document.documentElement;
  tagHtml.classList.remove('show-modal');
  
});


CloseModalOverlay.addEventListener('click', () => {
  
  let tagHtml = document.documentElement;
  tagHtml.classList.remove('show-modal');
  
});

const btnMenu = document.querySelectorAll('.js-btn-menu');
const menuSite = document.querySelectorAll('.js-menu');

btnMenu.forEach((btn, index) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();

    menuSite.forEach(itemMenu => {
      itemMenu.classList.remove('active');
      itemMenu.addEventListener('mouseleave', () => {
        itemMenu.classList.remove('active');
        
        btnMenu.forEach(itemBtn => {
          itemBtn.classList.remove('active');
        });
      });

    });

    btnMenu.forEach(itemBtn => {
      itemBtn.classList.remove('active');
    });


    btn.classList.add('active');
    menuSite[index].classList.add('active');

  });



});

const btnMenuMobile = document.querySelector('.js-btn-mobile');
const closeMobileOverlay = document.querySelector('.js-overlay-mobile');
const btnCloseMobile = document.querySelector('.js-close-mobile');

btnMenuMobile.addEventListener('click', (event) => {
  event.preventDefault();

  let tagHtmlMobile = document.documentElement;
  tagHtmlMobile.classList.add('show-mobile');

});

btnCloseMobile.addEventListener('click', () => {
  let tagHtmlMobile = document.documentElement;
  tagHtmlMobile.classList.remove('show-mobile');
});

closeMobileOverlay.addEventListener('click', () => {
  let tagHtmlMobile = document.documentElement;
  tagHtmlMobile.classList.remove('show-mobile');
});
