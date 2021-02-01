var webAppend = (num) => {
  eval('var chck = web.w'+num);
  document.getElementsByClassName('txt__title')[num].innerHTML = chck.title;
  document.getElementsByClassName('txt__Box')[num].innerHTML = chck.text;
};

// MENU TAB
var menuExit = () => {
  var menuBlank = document.getElementsByClassName('menu__blank')[0];
  var menuTab = document.getElementsByClassName('menu__tab')[0];
  var menu = document.getElementsByClassName('menu')[0];

  menuTab.setAttribute('style', 'margin-left: 100%; opacity: 0%; z-index: 0; transition: .5s;');
  menuBlank.setAttribute('style', 'right: 100%; opacity: 0%; z-index: 0; transition: .5s;');
  setTimeout(function() {
    menu.setAttribute('style', 'z-index: 0;');
  }, 0300); //1000 = 1s
}
var menuOpen = () => {
  var menuBlank = document.getElementsByClassName('menu__blank')[0];
  var menuTab = document.getElementsByClassName('menu__tab')[0];
  var menu = document.getElementsByClassName('menu')[0];

  menu.setAttribute('style', 'z-index: 20;');
  menuTab.setAttribute('style', 'margin-left: 50%; opacity: 100%; z-index: 20; transition: .5s;');
  menuBlank.setAttribute('style', 'right: 50%; opacity: 70%; z-index: 20; transition: .5s;');
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
