$(document).ready(function(){

    var swiper = new Swiper(".mb", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        
      });
      /* ul를 하이드 하고 lang를 클릭 할때 lang ul이 슬라이드 토글 */
      $('.lang ul').hide();
    $('.lang').click(function(){
        $('.lang ul').slideToggle();
    });



      






});

