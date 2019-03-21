const navIcon = document.querySelector('#nav-icon');
const nav = document.querySelector('nav');
const body = document.querySelector('body');
const main =  document.querySelector('main');
const aside =  document.querySelector('aside');
const footer =  document.querySelector('footer');
const header =   document.querySelector('header');

navIcon.addEventListener('click',()=> {
  navIcon.classList.toggle("change");
  nav.classList.toggle('show');
  navIcon.classList.toggle('slide-nav');
  main.classList.toggle('slide-left');
  aside.classList.toggle('slide-left');
  footer.classList.toggle('slide-left');
  header.classList.toggle('slide-left');
});


/// carousel slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}


//form functionality
