var webAppend = (num) => {
  eval('var chck = web.w'+num);
  document.getElementsByClassName('txt__title')[num].innerHTML = chck.title;
  document.getElementsByClassName('txt__Box')[num].innerHTML = chck.text;
};

var mobileAppend = (num) => {
  eval('var chck = mobile.m'+num);
  document.getElementsByClassName('txt__title')[num].innerHTML = chck.title;
  document.getElementsByClassName('txt__Box')[num].innerHTML = chck.text;
};


window.onload = () =>{

  // if(window.innerWidth < 600){

    for(var i=1; i < 7; i++){
      webAppend(i);
    }
    
  // }else{

    // for(var i=0; i < 5; i++){
    //   document.getElementsByClassName('txt__title')[i].innerHTML = test.w2.title;
    //   document.getElementsByClassName('txt__Box')[i].innerHTML = test.w2.text;
    // }

  // }

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