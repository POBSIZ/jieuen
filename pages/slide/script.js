window.onload = () =>{

  if(window.innerWidth < 500){

    for(var i=0; i < 5; i++){
      document.getElementsByClassName('txt__title')[i].innerHTML = test.w3.title;
      document.getElementsByClassName('txt__Box')[i].innerHTML = test.w3.text;
    }
    
  }else{

    for(var i=0; i < 5; i++){
      document.getElementsByClassName('txt__title')[i].innerHTML = test.w2.title;
      document.getElementsByClassName('txt__Box')[i].innerHTML = test.w2.text;
    }

  }

};

window.onchange = () => {
  if(window.innerWidth > 360){
    document.getElementsByClassName('txt__Box')[i].innerHTML = test.w3.text;
  }
};

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