$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
});

// Табы

$('body').on('click', '.tab__menu', function(e) {
    debugger
    $(this).addClass('active').siblings().removeClass('active')
    $($(this).data('tab')).addClass('active').siblings().removeClass('active')
    return false;
})


$('.tab__menu').slick({
    variableWidth: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1
});


$('.prev').on('click', function() {
    $('.tab__menu').slick('slickPrev')
})
$('.next').on('click', function() {
        $('.tab__menu').slick('slickNext')
    })
    //$('.tab__content').slick({
    //infinite: true,
    //slidesToShow: 5,
    // slidesToScroll: 1
    //});



// Меню бургер
$(document).ready(function() {
    $('.mobile-menu').click(function(event) {
        $('.mobile-menu, .main-menu').toggleClass('active');
    });
});

// Анимация WOW

//Селекты
$(document).ready(function() {
    $('.js-example').select2();
});

//Чекбоксы и радио
//$(document).ready(function() {

//Чекбоксы
// $.each($('.checkbox'), function(index, val) {
//if ($(this).find('input').prop('checked') == true) {
// $(this).addClass('active');
//  }
// });
//$(document).on('click', '.checkbox', function(event) {
// if ($(this).hasClass('active')) {
// $(this).find('input').prop('checked', false);
//  } else {
// $(this).find('input').prop('checked', true);
//  }
//  $(this).toggleClass('active');

//  return false;
//  });

//Радио
//  $.each($('.radio'), function(index, val) {
//   if ($(this).find('input').prop('checked') == true) {
//      $(this).addClass('active');
//  }
//  });
//$(document).on('click', '.radio', function(event) {
// $(this).parents('.row').find('.radio').removeClass('active');
//  $(this).parents('.row').find('.radio input').prop('checked', false);
//   $(this).toggleClass('active');
//   $(this).find('input').prop('checked', true);
//   return false;
//   });
//});