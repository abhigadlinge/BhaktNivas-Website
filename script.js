// user account section 
let account = document.querySelector('.user-account');

document.querySelector('#signin-btn').onclick = () =>{
   account.classList.add('active');
}

document.querySelector('#close-account').onclick = () =>{
   account.classList.remove('active');
}


// search form container 
let searchForm = document.querySelector('.search-form-container');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');    
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


// facilities section starts 
let accordion = document.querySelectorAll('.facilities .accordion-container .accordion');

accordion.forEach(acco =>{
   acco.onclick = () =>{
      accordion.forEach(remove => remove.classList.remove('active'));
      acco.classList.add('active');
   }
});

//color switcher section starts 
document.querySelector('.switcher-btn').onclick =() =>{
  document.querySelector('.color-switcher').classList.toggle('active')
};


let a= document.getElementById("btn1");
let b= document.getElementById("btn2");
let c= document.getElementById("btn3");
let d= document.getElementById("btn4");

let e= document.getElementById("btn5");
let f= document.getElementById("btn6");
let g= document.getElementById("btn7");
let h= document.getElementById("btn8");
let i= document.getElementById("btn9");


var r = document.querySelector(':root');

a.addEventListener('click' ,change1);
b.addEventListener('click' ,change2);
c.addEventListener('click' ,change3);
d.addEventListener('click' ,change4);
e.addEventListener('click' ,change5);
f.addEventListener('click' ,change6);
g.addEventListener('click' ,change7);
h.addEventListener('click' ,change8);
i.addEventListener('click' ,change9);

function change1 (){
        r.style.setProperty('--main-color', '#8e44ad');
}
function change2 (){
        r.style.setProperty('--main-color', '#2980b9');
}
function change3 (){
        r.style.setProperty('--main-color', '#f39c12');
}
function change4 (){
        r.style.setProperty('--main-color', '#27ae60');
}
function change5 (){
        r.style.setProperty('--main-color', '#e74c3c');
}
function change6 (){
        r.style.setProperty('--main-color', '#e84393');
}
function change7 (){
        r.style.setProperty('--main-color', '#ff4757');
}
function change8 (){
        r.style.setProperty('--main-color', '#ffc312');
}
function change9 (){
        r.style.setProperty('--main-color', '#17c0eb');
}

// slideshow container 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}  



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }  
  if (n < 1) {
    slideIndex = slides.length;
  }  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }  

  slides[slideIndex - 1].style.display = "block";
}  


let navbar = document.querySelector(' .header');

document.querySelector('#menu-btn').onclick = () =>{
        if (navbar.style.display == "none") {
                navbar.style.display = "block";
        }
        else {
                navbar.style.display = "none";
      }
}