
$(document).ready(function() {

  if (window.Swiper) {

    let info_swiper = new Swiper(".info__wrap", {
      slidesPerView: 1,
      preloadImages: false,
      spaceBetween: 24,
      lazy: true,
      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".info__block .swiper-button-next",
        prevEl: ".info__block .swiper-button-prev",
      },
      allowTouchMove: true,
    });

    let reviews_swiper = new Swiper(".reviews__wrap", {
      slidesPerView: 3,
      spaceBetween: 24,
      preloadImages: false,
      lazy: true,
      navigation: {
        nextEl: ".reviews__block .swiper-button-next",
        prevEl: ".reviews__block .swiper-button-prev",
      },
      allowTouchMove: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
       breakpoints: {
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1023: {
            slidesPerView: 3,
          }
        }
    });

    let product_swiper = new Swiper(".product__list", {
      slidesPerView: "auto",
      preloadImages: false,
      lazy: true,
      allowTouchMove: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });

    let breadcrumbs_swiper = new Swiper(".catalog__slider", {
       slidesPerView: "auto",
      preloadImages: false,
      lazy: true,
      allowTouchMove: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });

    let advantages_swiper = new Swiper(".swiper-advantages", {
       slidesPerView: 4,
        spaceBetween: 24,
      preloadImages: false,
      lazy: true,
      allowTouchMove: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
        breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        560: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        841: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
         1023: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }
    });

  }

  $('.card__btn--favorites').on('click', function(){
    $('.card__btn--favorites').addClass('card__btn--active');
  })

  $('.catalog__control').on('click', function() {
    $('.catalog__result').toggleClass('catalog__result--active');
  })

  $('.filter__block').on('click', function(){
    $('.popup--catalog').addClass('popup--active');
  })

  $('.catalog__btn-mob').on('click', function(){
   $('.popup--catalog').removeClass('popup--active');
  })

$('.city__wrap').on('click', '.city__item', function(e) {
  let value = $(e.target).text();
  $('.select__wrap--city .select__placeholder').text(value);

  let wrap =  $('.select__wrap--city');
  let input = wrap.find(`input[type="hidden"]`);
  input.val(value);
})

    $('.popup--city').on('click', function(e) {
      console.log($('.popup--city').has(e.target).length);
    if ($('.popup--city').is(e.target)  && $('.popup--city').has(e.target).length === 0 ){
      $('.popup--city').removeClass('popup--active');
      $('.wrap').removeClass('wrap--active'); 
       $('.popup--menu').removeClass('popup--bg');
    }
  }) 
    $('.popup--city').on('click', '.city__close, .city__btn', function(e) {
    $('.wrap').removeClass('wrap--active');  
   $('.popup--city').removeClass('popup--active');
    $('.popup--menu').removeClass('popup--bg');
  })

  $('.main-header__map').on('click', function(){
    $('.wrap').addClass('wrap--active');
    $('.popup--city').addClass('popup--active');
  })

  $('.popup .main-header__map').on('click', function(){
    $('.popup--menu').toggleClass('popup--bg');
  })

 $('.product__btn').on('click', function(e) {
 $(e.currentTarget).addClass('product__btn--active'); 

  setTimeout(function(){
    $(e.currentTarget).removeClass('product__btn--active');
  }, 1000)

})

 $('.catalog__inner').on('click', '.catalog__subtitle--user', function(e){
  let elem = $(e.target).parents('.catalog__inner').find('.check__submenu');
  console.log(elem);
  $(elem).slideToggle(250);
  $(e.target).toggleClass('catalog__subtitle--hide');
 })

  $(document).on('mouseover', '.product__elem', function(e) {
    let elem = e.currentTarget;
    let indexElem = $(elem).data('index');
    let parent = $(elem).parents('.product__item');
    let block = parent.find('.product__elem');
    let image = parent.find('.product__image');
    let size = parent.find('.product__wrap-size')

    block.removeClass('product__elem--active');
    $(this).addClass('product__elem--active');

    image.removeClass('product__image--visible');
    image.eq(indexElem).addClass('product__image--visible');

    size.find('.product__size').removeClass("product__size--active");
    size.find('.product__size').eq( indexElem).addClass("product__size--active");

  })

  $(document).on('mouseover click', '.product__bg', function(e) {
    let elem = e.currentTarget;
    let indexElem = $(elem).data('index');
    let parent = $(elem).parents('.product__item');
    let block = parent.find('.product__bg');
    let image = parent.find('.product__image');
    let size = parent.find('.product__wrap-size')

    block.removeClass('product__bg--active');
    $(this).addClass('product__bg--active');

    image.removeClass('product__image--visible');
    image.eq(indexElem).addClass('product__image--visible');

    size.find('.product__size').removeClass("product__size--active");
    size.find('.product__size').eq( indexElem).addClass("product__size--active");

  })

  $('.mob-menu__open, .mob-block__phone, .mob-menu__link--search').on('click', function(){
    $('.popup--menu').toggleClass('popup--active');
  })

  $('.mob-menu__close').on('click', function(){
    $('.popup--menu').toggleClass('popup--active');
  })

 $('.mob-menu__link--search').on('click', function(){
  $('.popup__input').focus();
})

 $('.mob-menu__link--catalog').on('click', function(e){

    $('.popup__inner').toggleClass('popup__inner--active');
    e.preventDefault();
 })

$('.popup__col').on('click', function(){
    var text = $(this).text();
    $(this).parents('li').find('.popup__submenu').addClass('popup__submenu--active')
    $('.popup__title').addClass('popup__title--active');
    $('.popup__title--active').text(text);
     $('.popup__elem').addClass('popup__elem--inner');
})

$('.popup__elem').on('click', function(){
  $('.popup__submenu').removeClass('popup__submenu--active');
   $('.popup__title').removeClass('popup__title--active');
  let title = $('.popup__title').data('title');
 $('.popup__title').text(title);
 //if($('.popup__elem').hasClass('popup__elem--inner')){
  $('.popup__inner').removeClass('popup__inner--active');
 //}
})

$('.popup__inner').on('click', '.popup__title--active', function(){
   let title = $('.popup__title').data('title');
 $('.popup__title').text(title);
  $('.popup__submenu').removeClass('popup__submenu--active');
  $('.popup__title').removeClass('popup__title--active');
})

  let elems = $('.reviews__text');
  elems.each(function( index, item ) {
    let heightItem = $(item).find('.reviews__block').height();
    const elem = $(item).parents('.reviews__item');
    const btnItem = elem.find('.reviews__more');
     if(heightItem>114) {
      btnItem.html(btnItem.data('show'));
      btnItem.addClass('reviews__more--active');
       $(item).addClass('reviews__text--gradient');
     }
  })


    let elemText = $('.content__text');
    if($('.content__text').length>0) {
      let elemItem = elemText.find('.content__block').height();
      console.log(elemItem);
      const item = elemText.parents('.content__item');
      const btnMore = item.find('.content__more');
       if(elemItem>56) {
        console.log(elemText.find('.content__block').height())
        btnMore.css( "display", "block" ); 
       btnMore.addClass('content__more--active');
       elemText.addClass('content__text--gradient');
       }
    }

    $('.content__more').on('click', function(){
       $('.content__more').toggleClass('content__more--inner')
    })

 function ReadMoreText(item, more, text, block, gradient, active, value){
   $(item).on('click', more, function(e) {
   let elem = $(e.target).parents(item);

    let btn = elem.find(more);
    let textElem = elem.find(text);
    let heightItem = elem.find(block).height();

    textElem.toggleClass(gradient);
     
     if(textElem.hasClass(active)) {
      btn.html(btn.data('hide'));
      textElem.css( "height", heightItem );
     } else {
      btn.html(btn.data('show'));
      textElem.css( "height", value );
     }
   })
 }

 ReadMoreText('.reviews__item', '.reviews__more', '.reviews__text', '.reviews__block', 'reviews__text--active reviews__text--gradient', 'reviews__text--active', '114px');

  ReadMoreText('.content__item', '.content__more', '.content__text', '.content__block', 'content__text--active content__text--gradient', 'content__text--active', '57px');


  let iframeContainer = $('#map');
  if($('#map').length>0) {

      let advancedOffset = 150;
      let iframeContainerOffsetTop = Math.round(iframeContainer.offset().top);
      let windowHeight = $(window).height();
    
      // При загрузке страницы делаем проверку, не находится ли наш div в поле видимости, если находится, то мы сразу в него вставляем iframe
      // Если этого не делать, и страница вдруг окажется маленькой по высоте где не будет скролла, то наш div останется без iframe
      if ($(window).scrollTop() >= (iframeContainerOffsetTop - windowHeight - advancedOffset)) {
        iframeContainer.addClass('active');
      }

      $(window).scroll(function () {
        if ($(this).scrollTop() >= (iframeContainerOffsetTop - windowHeight - advancedOffset)) {
          // При прокрутке страницы делаем проверку на наличие iframe внутри div, если его нет, то добавляем в него iframe
          // Если не делать эту проверку, то при каждом скролле у нас в div будет обновляться iframe и по новой загружаться
          if (!iframeContainer.hasClass('active')) {
             iframeContainer.addClass('active');
          }
        }
      });
  }


});

 let map;

  function initMap() {
    const mapOptions = {
      zoom: 8,
      center: { lat: 49.8131973, lng: 24.042569 },
    };
      map = new google.maps.Map(document.getElementById("map"), mapOptions);

    const marker = new google.maps.Marker({
      position: { lat: 49.8131973, lng: 24.042569 },
       map: map,
    });

    const mapTitle = document.querySelector('#map').getAttribute('data-title');
    const infowindow = new google.maps.InfoWindow({
      content: `<p class="map__title">${mapTitle}</p>`,
    });

    infowindow.open(map, marker);
  }

  $(document).on('input', '.catalog__field', function(e) {
    
    let isFound;
    $(e.target).parents('.catalog__inner--brends').find('.check__label').each((i, el) => {
      let is = $(el).html().toLowerCase().indexOf(e.target.value.toLowerCase()) != -1;
      $(el).parents('.check__item').css("display", is ? "flex" : "none");
      if (is) isFound = true;
    });
  })

  $(document).on('click', '.select__wrap--single .select__item', function(e) {
    var index = $(this).index();
    $(".single__tem").removeClass("single__item--active").eq($(this).index()).addClass("single__item--active");

    $(".single__box").hide().eq(index).fadeIn();
    let elemPlaceholder = $('.select__wrap--single .select__placeholder');
    console.log($('[data-icon]').get().map(n => n.dataset.icon));
    elemPlaceholder.removeClass($('[data-icon]').get().map(n => n.dataset.icon)).addClass(this.dataset.icon);
  })

  $(document).on('click', '.select__wrap', function(e) {
    if ($(e.target).is('.select__disabled') || $(e.target).closest('.select__list').length) {
      return false;
    }

    let $select__wrap = $(this);

    if (!$select__wrap.hasClass('select__wrap--active')) {
      if ($select__wrap.hasClass('select__wrap--end-active')) {
        // предотвращение дребезга
        // меню ещё закрывается
        return
      }
      showSelectList($select__wrap)
    } else {
      hideSelectList($select__wrap)
    }

  });

  $(document).on('click', '.select__item', function(e) {
    if ($(e.target).is('.select__item--disabled')) {
      return false;
    } else if ($(e.target).is(".select__item")) {

      let wrap =  $(this).parents('.select__wrap');
      let value = $(this).text();
      let input = wrap.find(`input[type="hidden"]`);
      input.val(value);

      let $select__wrap = $(this).parents('.select__wrap')
      let $select__item = $(this);

      $select__wrap.find('.select__item--active').removeClass('select__item--active')
      $select__item.addClass('select__item--active');
      setPlaceholder(this);

      hideSelectList($select__wrap)
      e.stopPropagation();
    }

  });

  $(document).on('input', '.select__input', function(e) {
    let isFound;
    $(e.target).parent().siblings('li').each((i, el) => {
      let is = $(el).html().toLowerCase().indexOf(e.target.value.toLowerCase()) != -1;
      $(el).css("display", is ? "block" : "none");
      if (is) isFound = true;
    });
    $('.select__item-search-not-found').css("display", isFound ? "none" : "block");
  })


  function clickOutside(e) {
    var $select__wrap = $(".select__wrap");
    if (!$select__wrap.is(e.target) && $select__wrap.has(e.target).length === 0) {
      hideSelectList($select__wrap)
    }
  }

  function showSelectList($select__wrap) {
    $(document).on('click', clickOutside);
    let $select__list = $select__wrap.find(".select__list");

    if ($('.js-datepicker').val() !== '') {
      let {
        height,
        top,
        bottom
      } = $select__list.get(0).getBoundingClientRect();
      if ($(window).height() < bottom - 16 && top > height + 16 * 2) {
        $select__wrap.addClass('select__wrap--position-top');
      }

      $('.select__wrap').removeClass('select__wrap--active');
      $select__wrap.addClass('select__wrap--start-active');
      setTimeout(() => {
        $select__wrap.removeClass('select__wrap--start-active').addClass('select__wrap--active');
        let duration = getTransitionDuration($select__list);
        setTimeout(() => {
          $select__wrap.addClass('select__wrap--end-active')
        }, duration)
      }, 0)
    }
  }

  function hideSelectList($select__wrap) {
    $(document).off('click', clickOutside);
    $select__wrap.removeClass('select__wrap--active');
    let duration = getTransitionDuration($select__wrap.find(".select__list"));
    setTimeout(() => {
      $select__wrap.removeClass('select__wrap--position-top select__wrap--end-active')
    }, duration)
  }

  function setPlaceholder(self) {
    var value_pl = $(self).html();
    $(self).parents('.select__wrap').find('.select__placeholder').html(value_pl);
    $('#user__elem').val(value_pl);
  }

  function checkActive(self) {
    var text = $(self).find('.select__item--active').text();
    $(self).find('.select__placeholder').html(text);
  }

  // Возвращает макс прододжительность анимации $self
  // Поддерживает только время в секундах (s)
  function getTransitionDuration($self) {
    return Math.max(...$self.css('transition-duration').split('s,').map(parseFloat), 0) * 1000 + 50;
  }

