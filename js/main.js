// Smooth scrolling

const linksGet = document.querySelectorAll('a[href^="#"]');

linksGet.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const linkScrool = this.getAttribute('href');

    document.querySelector(linkScrool).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Services

const btnGardens = document.querySelector('.service__btn-top button:nth-child(1)')
const btnLawn = document.querySelector('.service__btn-top button:nth-child(2)')
const btnPlanting = document.querySelector('.service__btn-top button:nth-child(3)')
const pic = document.querySelectorAll('.card')
const windService = document.querySelector('.service');


windService.addEventListener('click', (event) => {
    if(event.target !== btnGardens && event.target !== btnLawn && event.target !== btnPlanting) {
        removeActive()
    }
})
btnGardens.addEventListener('click', () => {
    removeActive();
    pic[1].classList.add('active');
    pic[2].classList.add('active');
    pic[3].classList.add('active');
    pic[5].classList.add('active');
})
btnLawn.addEventListener('click', () => {
    removeActive()
    pic[0].classList.add('active');
    pic[1].classList.add('active')
    pic[3].classList.add('active');
    pic[4].classList.add('active')
    pic[5].classList.add('active')
})
btnPlanting.addEventListener('click', () => {
    removeActive()
    pic[0].classList.add('active');
    pic[2].classList.add('active')
    pic[4].classList.add('active')
})
function removeActive() {
    for(let i = 0; i < pic.length; i++) {
        pic[i].classList.remove('active')
    }
}