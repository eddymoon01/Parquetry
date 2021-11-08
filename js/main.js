$(function(){

  // 윈도우 너비
  var win_w = $(window).width();
  
  $(window).on('resize', function(){
    win_w = $(this).width();
  });

  var is_count = true;

  function count( item, max, speed){
    var i = 0;

    setInterval(function(){
        if(i > max){
            return 0 ;
        }

        $(item).text(i);
        i++;
    }, speed);
  }
  
  count('.number_1', 12, 100);
  count('.number_2', 2, 500);
  count('.number_3', 679, 0.1);
  count('.number_4', 25, 90);

  // 스크롤 관련
  var pos = [];
  var base = -500;
  
  function save_section_offset(){
    pos = []; 
    $('section').each(function(){
        pos.push( parseInt($(this).offset().top ));
    });
  }
  save_section_offset();

  $(window).on('scroll', function(){
    var scroll = $(this).scrollTop();
    $('section').each(function(n){ 
        if(scroll >= pos[n] + base) {
            $(this).addClass('active');
        }
    });
    
    if(win_w>1200){
      if(scroll >= 50){
        $('#header').addClass('active')
      }else{
        $('#header').removeClass('active')
      }
    }else{
      $('header').removeClass('active')
    }

    if(scroll >= pos[5] + base && scroll < pos[7] + base){
                
      if( is_count ){
        count('.number_1', 12, 100);
        count('.number_2', 2, 500);
        count('.number_3', 679, 0.1);
        count('.number_4', 25, 90);
        is_count = false;
      }
    }

  });


  //gnb ul
  $('#header .bar_menu').click(function(){
    $(this).toggleClass('active').children().toggleClass('fas fa-bars').toggleClass('fas fa-arrow-left');
    $('#header .gnb_wrap').toggleClass('active');
  })
  
  // gnb page hover
  $('.gnb>li').on('mouseenter',function(){
    if(win_w>980){
      $(this).children('ul').addClass('active');
    }else{
      $('.gnb>li>p').off('click');
      $('.gnb>li>p').on('click',function(){
         $('.gnb>li>ul').stop().removeClass('active');
          $(this).next('ul').stop().addClass('active');
      });
    }
    
  })
  $('.gnb>li').on('mouseleave',function(){
    if(win_w>980){
      $(this).children('ul').removeClass('active');
    }
  });

  // gnb page hover
  $('.gnb>li').eq(6).on('mouseenter',function(){
    $('.page').addClass('active')
  })

  $('.gnb>li').eq(6).on('mouseleave',function(){
    $('.page').removeClass('active')
  })


  // gnb 스와이퍼
  var swiper = new Swiper("#header .swiper", {
    // slidesPerView: 2,
    // spaceBetween: 5,
    // slidesPerGroup: 2,
    // loop: true,
    
    breakpoints:{
      768:{
        
      },
      980:{
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: true,
      },
      1200:{
        slidesPerView: 2,
        spaceBetween: 5,
        slidesPerGroup: 2,
        loop: true,
      }
    }
  });

  // visual 스와이퍼
  var swiper = new Swiper("#visual .swiper", {
    effect: 'fade',
    fadeEffect: { crossFade: true },
    slidesPerView: 1,
    loop: true,

    pagination:{
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });

  // say 스와이퍼
  var swiper = new Swiper('#say .swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true'
    }
  })

  // product_2 스와이퍼
  var swiper = new Swiper("#product_2 .mySwiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,

    pagination:{
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints:{
      640:{
        slidesPerView: 2,
        slidesPerGroup: 2,
        loop: true
      },
      768:{
        slidesPerView: 3,
        slidesPerGroup: 3,
        loop: true
      },
      980:{
        slidesPerView: 4,
        slidesPerGroup: 4,
        loop: true
      },
      1200:{
        slidesPerView: 4,
        slidesPerGroup: 4,
        loop: true
      }
    }
  });

  // sponsor 스와이퍼
  var swiper = new Swiper("#sponsor .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      480:{
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      640:{
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      768:{
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      980:{
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      1200:{
        slidesPerView: 4,
        slidesPerGroup: 4,
      }
    }
  });

})