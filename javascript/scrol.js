$(document).ready(function(){
    $('.line_services').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
{
  breakpoint: 980,
  settings: {
    slidesToShow: 3
  }
},
{
  breakpoint: 600,
  settings: {
    slidesToShow: 1,
    touchMove: true,
    mobileFirst: true
  }
}
]
    });
  });