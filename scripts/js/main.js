const aside = document.getElementById('aside');
const burger = document.getElementById('burger');

burger.addEventListener('click', () => {
  aside.classList.toggle('active');
  burger.classList.toggle('active')
})