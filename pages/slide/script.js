var webAppend = (num) => {
  eval('var chck = web.w'+num);
  document.getElementsByClassName('txt__title')[num].innerHTML = chck.title;
  document.getElementsByClassName('txt__Box')[num].innerHTML = chck.text;
};

// MENU TAB
function menuExit(){
  var menu = document.getElementsByClassName('menu')[0];
  menu.style.display = 'none';
}
function menuOpen(){
  var menu = document.getElementsByClassName('menu')[0];
  menu.style.display = 'block';
}

window.onload = () =>{
  for(var i=1; i < 7; i++){webAppend(i);}
};

// set Slick Slider
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,  
  arrows: true,
  autoplay: false,
  autoplaySpeed: 2000,  
});
