// MENU TAB
var menuBlank = document.getElementsByClassName('menu__blank')[0];
var menuTab = document.getElementsByClassName('menu__tab')[0];
var menu = document.getElementsByClassName('menu')[0];
var menuExit = () => {
  menuTab.setAttribute('style', 'margin-left: 100%; opacity: 0%; z-index: 0; transition: .5s;');
  menuBlank.setAttribute('style', 'right: 100%; opacity: 0%; z-index: 0; transition: .5s;');
  setTimeout(function() {
    menu.setAttribute('style', 'z-index: 0;');
  }, 0300); //1000 = 1s
}
var menuOpen = () => {
  menu.setAttribute('style', 'z-index: 20;');
  menuTab.setAttribute('style', 'margin-left: 30%; opacity: 100%; z-index: 20; transition: .5s;');
  menuBlank.setAttribute('style', 'right: 70%; opacity: 70%; z-index: 20; transition: .5s;');
}


var webAppend = (num) => {
  eval('var chck = web.w'+num);
  document.getElementsByClassName('txt__title')[num].innerHTML = chck.title;
  document.getElementsByClassName('txt__Box')[num].innerHTML = chck.text;
};

var dropArrow = document.getElementsByClassName('dropArrow')[0];
var cartegory = document.querySelector('#menu__tab_list-itm--cartegory');

window.onload = () => {
  for(var i=1; i < 7; i++){webAppend(i);}

  cartegory.addEventListener('mouseover', function(){
    dropArrow.setAttribute('style', 'transform: rotate(90deg); transition: .3s;');
  });
  cartegory.addEventListener('mouseout', function(){
    dropArrow.setAttribute('style', 'transform: rotate(0deg); transition: .3s;');
  });
};

// set Slick Slider
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,  
  arrows: true,
  prevArrow: $('#prevBtn'),
  nextArrow: $('#nextBtn'),
  autoplay: false,
  autoplaySpeed: 2000,  
});
