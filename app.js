const hamburger = document.querySelector('#hamburger');
const closeNav = document.querySelector('#close');
const mobileNav = document.querySelector('#mobile-nav');

closeNav.addEventListener('click', ()=>{
    mobileNav.classList.toggle('hidden');
   
})

hamburger.addEventListener('click', ()=>{
    mobileNav.classList.toggle('hidden');
})

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);