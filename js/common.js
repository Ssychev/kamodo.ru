$(function() {

$('.popup_gallery').magnificPopup({
 delegate: 'a',
 closeBtnInside: true,
 fixedContentPos: false,
 midClick: true,
 type: 'image',
 tLoading: 'Загрузка изображения #%curr%...',
 zoom: {
     enabled: true,
     duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
 },
 gallery: {
     enabled: true,
     navigateByImgClick: true,
     preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
 }
 });

$('.btn_more').click(function(){
    $(this).prev('.hidden').slideToggle();
    $(this).fadeOut()
})

    $(".navigate").mPageScroll2id();

	$(window).scroll(function(){
	
	var st = $(this).scrollTop();

	$('.parallax').css({
		"transform" : "translate(0%, " + st /20 + "%"
	});
});
	$(".toggle").click(function(){
			if ($(".icon-menu").hasClass("fa-bars")) {
				$(".icon-menu").removeClass("fa-bars")
				$(".icon-menu").addClass("fa-times")
			} else {
				$(".icon-menu").addClass("fa-bars")
				$(".icon-menu").removeClass("fa-times")
			};
			$(".toggled").slideToggle();
	});
	$('.items_free').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1199:{
            items:4,
        },
        1200:{
            items:6,
        }
    }
});

$(".port_btn").click(function(){
	var ctrlClass = $(this).children("div").attr('class');
	$('.port_wrap').find('.port_item').removeClass('active').addClass('hidden').animate({'opacity':0},300);
	$('.port_wrap').find('.'+ctrlClass).addClass('active').removeClass('hidden').animate({'opacity':1},700);
	
});


$('.port_butns').owlCarousel({
    loop:false,
    mouseDrag: false,
    margin:10,
    nav: true,
    navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    responsiveClass:true,
    responsive:{
    		0:{
            items:1,
        },
        375:{
            items:2,
        },
        600:{
            items:3,
        },
        1199:{
            items:4,
        },
        1200:{
            items:6,
        }
    }
});

});
