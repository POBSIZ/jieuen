var wid_text = document.getElementById('w1_text');
var wid_title = document.getElementById('w1_title');
window.onload = () =>{
  for(var i=0; i < 5; i++){
    document.getElementsByClassName('txt__title')[i].innerHTML = test.w2.title;
    document.getElementsByClassName('txt__Box')[i].innerHTML = test.w2.text;
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