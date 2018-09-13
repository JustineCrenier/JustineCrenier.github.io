$('.trigger').click(function(){
	$('#nav').toggleClass('open');
    $('i.im-menu').toggleClass('open');
    $('i.im-x-mark').toggleClass('open');
});

$('#nav ul li a').click(function(){
	$('#nav').toggleClass('open');
    $('i.im-menu').toggleClass('open');
    $('i.im-x-mark').toggleClass('open');
});

var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});