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
