var wid_text = document.getElementById('w1_text');
var wid_title = document.getElementById('w1_title');
window.onload = () =>{
  for(var i=0; i < 3; i++){
    wid_title.innerHTML = test.w2.title;
    wid_text.innerHTML = test.w3.text;
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