var wid = document.getElementById('w1');
window.onload = () =>{
  for(var i=0; i < 3; i++){
    wid.innerHTML = test.w1.name;
  }
}


// set Slick Slider
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,  
  arrows: false,
  autoplay: false,
  autoplaySpeed: 2000,
});


jQuery(document).ready(function($){
  $("li.content").hide();
  $("ul.toggle-menu").delegate("li.toggle", "click", function() { 
  $(this).next().toggle("fast").siblings(".content").hide("fast");
    });
});