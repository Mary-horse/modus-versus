let navPort = document.querySelector(".nav4");
let reqtangle = document.querySelector(".req");
let wrap = document.querySelector(".menu-wrapper");
let nav = document.querySelector(".nav");
let logoClub = document.querySelector(".logo-club");
let wNav = document.querySelector(".w-nav");
let butSearch = document.querySelector(".search");
let btnView = document.querySelector(".btn1");
let btnReadMore1 = document.querySelector(".btn2");
let btnReadMore2 = document.querySelector(".btn3");
let btnReadMore3 = document.querySelector(".btn4");
let btnReadMore4 = document.querySelector(".btn5");
let learnModal = document.getElementById("learnModal");
let cross = document.getElementById("close");

function showChoice () {
   if(reqtangle.style.display == 'none') {
      reqtangle.style.display = 'block';
   }
   else {
      reqtangle.style.display = 'none';
   };
}
navPort.addEventListener("mouseover", showChoice);


let sticky = wrap.offsetTop;
//let widthWrap = document.documentElement.clientWidth;
window.onscroll = function myFun() {
	if (window.pageYOffset >= sticky) {
      butSearch.style.height = "13px";
      nav.style.justifyContent = "unset";
      nav.style.overflowY = "hidden";
      // butSearch.style.marginTop = "15px";
      // wNav.style.marginTop = "15px";
      wrap.style.justifyContent = "center";
	    wrap.classList.add("sticky");
	    wrap.classList.add("backg");
	    wrap.classList.add("panel", ":after");
  } else {
       butSearch.style.height = "13px";
       butSearch.style.marginTop = "0px";
       wNav.style.marginTop = "0px";
	    wrap.classList.remove("sticky");
	    wrap.classList.remove("backg");
	    wrap.classList.remove("panel", ":after");
  	}
}

// $(".slick-track").style.transform = "none";
jQuery(document).ready(function ($) {
   $(".slider").slick({
     dots: true,
     infinite: false,
     speed: 800,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: false,
     //autoplaySpeed: 2000,
     arrows: true,
   });
 });

jQuery(document).ready(function ($) {
   $(".slider2").slick({
     dots: false,
     infinite: false,
     speed: 800,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: false,
     //autoplaySpeed: 2000,
     arrows: true,
   });
 });

function showModal() {
   learnModal.classList.add("active");
}
 
function hiddenModal() {
   learnModal.classList.remove("active");
}

// btnView.addEventListener("click", showModal);
// btnReadMore1.addEventListener("click", showModal);
// btnReadMore2.addEventListener("click", showModal);
// btnReadMore3.addEventListener("click", showModal);
// btnReadMore4.addEventListener("click", showModal);
cross.addEventListener("click", hiddenModal);