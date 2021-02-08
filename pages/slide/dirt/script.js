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

var dropArrow = document.getElementsByClassName('dropArrow')[0];
var cartegory = document.querySelector('#menu__tab_list-itm--cartegory');
var menuNum = 0;
var menuEvent =()=>{
  cartegory.addEventListener('click', function(){
    if (menuNum == 0) {
      cartegory.setAttribute('style', 'padding-bottom: 100%; transition: .3s;');
      dropArrow.setAttribute('style', 'transform: rotate(0deg); transition: .3s;');
      menuNum ++;
    }else{
      cartegory.setAttribute('style', 'padding-bottom: 0; transition: .3s;');
      dropArrow.setAttribute('style', 'transform: rotate(90deg); transition: .3s;');
      menuNum --;
    }
  });
}
// ------------------------------------------------------------------------------------------------

var webAppend = (num) => {
  eval('var chck = web.w'+num);
  document.getElementsByClassName('txt__title')[num].innerHTML = chck.title;
  document.getElementsByClassName('txt__author')[num].innerHTML = chck.author;
  document.getElementsByClassName('txt__Box')[num].innerHTML = chck.text;
  document.getElementsByClassName('itm__author--comment-text')[num].innerHTML = chck.comment;
};

var commentArrow = document.getElementsByClassName('author_dropArrow');
var commentClick = document.getElementsByClassName('itm__author--comment');
var commentNum = 0;
var commentEvent =(i)=>{
  commentClick[i].addEventListener('click', function(){
    if (commentNum == 0) {
      commentClick[i].setAttribute('style', 'padding-bottom: 130%; transition: .3s;');
      commentArrow[i].setAttribute('style', 'transform: rotate(0deg); transition: .3s;');
      commentNum ++;
    }else{
      commentClick[i].setAttribute('style', 'padding-bottom: 15px; transition: .3s;');
      commentArrow[i].setAttribute('style', 'transform: rotate(90deg); transition: .3s;');
      commentNum --;
    }
  });
}

window.onload = () => {
  menuEvent();
  for(var i=1; i < 11; i++){
    webAppend(i);
    commentEvent(i);
  }
};

// set Slick Slider
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,  
  arrows: true,
  prevArrow: $('#prevBtn'),
  nextArrow: $('#nextBtn'),  
});
