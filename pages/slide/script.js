var parseData = JSON.parse(JSON.stringify(test));
var h1t = document.getElementsByClassName('h1_title')[0];

window.onload = () =>{
  for(var i=0; i < 3; i++){

  }
  console.log(parseData.info);
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