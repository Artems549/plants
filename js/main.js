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

const btnGardens = document.querySelector('.service__text-btn button:nth-child(1)');
const btnLawn = document.querySelector('.service__text-btn button:nth-child(2)');
const btnPlanting = document.querySelector('.service__text-btn button:nth-child(3)');
const pic = document.querySelectorAll('.service__cards-card');
const windService = document.querySelector('.service');



windService.addEventListener('click', (event) => {
    if(event.target !== btnGardens && event.target !== btnLawn && event.target !== btnPlanting) {
        removeActive();
    }
});
btnGardens.addEventListener('click', () => {
    removeActive();
    pic[1].classList.add('active');
    pic[2].classList.add('active');
    pic[3].classList.add('active');
    pic[5].classList.add('active');
});
btnLawn.addEventListener('click', () => {
    removeActive();
    pic[0].classList.add('active');
    pic[1].classList.add('active');
    pic[3].classList.add('active');
    pic[4].classList.add('active');
    pic[5].classList.add('active');
});
btnPlanting.addEventListener('click', () => {
    removeActive();
    pic[0].classList.add('active');
    pic[2].classList.add('active');
    pic[4].classList.add('active');
});
function removeActive() {
    for(let i = 0; i < pic.length; i++) {
        pic[i].classList.remove('active');
    }
};


// Contact city

const btnCity = document.querySelector('.contact__city > button');
const optionsBtn = document.querySelector('.contact__city-options');
const buttonsCity = document.querySelectorAll('.contact__city-options button');
const cityCard = document.querySelectorAll('.contact__city-cards-card');
const windowContact = document.querySelector('.contact');
const text = ['Canandaigua, NY', 'New York City', 'Yonkers, NY', 'Sherrill, NY']
function addSelectCity() {
    for(let i = 0; i < buttonsCity.length; i++) {
        buttonsCity[i].addEventListener('click', () => {
            removeCard();
            btnCity.innerHTML =  text[i];
            cityCard[i].style.display = 'block';
        });
    }
}
windowContact.addEventListener('click', (elem) => {
    if(elem.target != btnCity) {
        optionsBtn.classList.remove('active');
        btnCity.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
        btnCity.style.backgroundColor = 'var(--color-green-white)';
    }
})
btnCity.addEventListener('click', () => {
    if(optionsBtn.classList.contains('active')) {
        optionsBtn.classList.remove('active');
        btnCity.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
        btnCity.style.backgroundColor = 'var(--color-green-white)';
    } else {
        optionsBtn.classList.add('active')
        btnCity.style.boxShadow = 'none';
        btnCity.style.backgroundColor = 'var(--color-green-salad)';
    }
})
function removeCard() {
    for(let j = 0; j < cityCard.length; j++) {
        cityCard[j].style.display = 'none';
    }
}
addSelectCity();