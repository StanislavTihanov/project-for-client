"use strict"

//------------------------------------------------------------------------скрипт для отправки формы
jQuery(document).ready(function () {
  $(".phone").mask("+7 (999) 999-99-99"); 
  jQuery('.send-form').click( function() {
    var form = jQuery(this).closest('form');
    
    if ( form.valid() ) {
      form.css('opacity','.5');
      var actUrl = form.attr('action');

      jQuery.ajax({
        url: actUrl,
        type: 'post',
        dataType: 'html',
        data: form.serialize(),
        success: function(data) {
          form.html(data);
          form.css('opacity','1');
        },
        error:	 function() {
            form.find('.status').html('серверная ошибка');
        }
      });
    }
  });
});
//------------------------------------------------------------------------скрипт для отправки формы


//------------------------------------------------------------------------появление цифр на главном экроне
$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});
//------------------------------------------------------------------------появление цифр на главном экроне

//------------------------------------------------------------------------появление бекграунда у шапки
window.addEventListener('scroll', () => {
  if(pageYOffset > 50) {
    document.querySelector('.header').classList.add('bg_active')
  } else {
    document.querySelector('.header').classList.remove('bg_active')
  }
})
//------------------------------------------------------------------------появление бекграунда у шапки

//------------------------------------------------------------------------выпадающий список у шапки
const buttonList = document.querySelector('.menu__list-item--mod');
const list = document.querySelector('.categories__list');
 buttonList.addEventListener ('click', () => {
    list.classList.toggle('open-list')
 })
//------------------------------------------------------------------------выпадающий список у шапки

//------------------------------------------------------------------------Меню-Бургер
const burgerMenu = document.querySelector('.header__burger');
const menuBody= document.querySelector('.menu');

if(burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
      burgerMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
}


//------------------------------------------------------------------------Прокрутка при клике
let buttons = document.querySelectorAll('.menu__link');

buttons.forEach((elem)=>{
  elem.addEventListener('click',()=>{
    menuBody.classList.remove('_active');
    burgerMenu.classList.remove('_active');
  })
})

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
      
        window.scrollTo({
        top:gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}
//------------------------------------------------------------------------Прокрутка при клике


//------------------------------------------------------------------------Слайдер
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  loopedSlides: 3,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 2000,
  centeredSlides: true,
  slidesPerView: 1,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
//------------------------------------------------------------------------Слайдер




//------------------------------------------------------------------------Tabs
const tabsButton = document.querySelectorAll('.tabs-button');
const tabsContent = document.querySelectorAll('.tabs-content');

tabsButton.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabsButton.forEach(tab => {tab.classList.remove('active-tab')});
    tab.classList.add('active-tab');
    
    tabsContent.forEach(content => {content.classList.remove('active-tab')})
    tabsContent[index].classList.add('active-tab');
  });
});



//------------------------------------------------------------------------Accordion
const titles = document.querySelectorAll('.accordion__title');
const contents = document.querySelectorAll('.accordion__content');

titles.forEach(item => item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.dataset.tab);

    if (activeContent.classList.contains('active')) {
        activeContent.classList.remove('active');
        item.classList.remove('active');
        activeContent.style.maxHeight = 0;
    } else {
      contents.forEach(element => {
        element.classList.remove('active');
        element.style.maxHeight = 0;
      });
      titles.forEach(element => element.classList.remove('active'));

      item.classList.add('active');
      activeContent.classList.add('active');
      activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }
}));
//------------------------------------------------------------------------Accordion



//------------------------------------------------------------------------Подключение библиотеки для табов
var mixer = mixitup('.gallery__inner', {
  load: {
    filter: '.btn-active'
  }
});
//------------------------------------------------------------------------Подключение библиотеки для табов
// Получаем все элементы, на которые нужно повесить обработчик событий
const elements = document.querySelectorAll('.gallery__btn');

// Добавляем обработчик событий 'click' каждому элементу
elements.forEach(element => {
 element.addEventListener('click', function() {
    // Удаляем класс 'active' у всех элементов
    elements.forEach(el => {
      el.classList.remove('btn-active');
    });
 });
});
//------------------------------------------------------------------------эммитация клика на активную кнопку

$(document).ready(function() {
  $('.btn-active').trigger('click');
});

//------------------------------------------------------------------------эммитация клика на активную кнопку



