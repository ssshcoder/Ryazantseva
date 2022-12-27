// footer waves
const wrapper = document.getElementById("bubble-wrapper");

const animateBubble = x => {  
  const bubble = document.createElement("div");
  
  bubble.className = "bubble";
  bubble.style.left = `${x}px`;
  
  wrapper.appendChild(bubble);
  
  setTimeout(() => wrapper.removeChild(bubble), 2000);
}

window.onmousemove = e => animateBubble(e.clientX);

// плавный скролл
const form = document.querySelector('.form-section')
const buttonsToForm = document.querySelectorAll('.scroll-btn')

function scrollTo(el) {
    window.scroll({
        left:0,
        top:el.offsetTop,
        behavior:'smooth'
    })
}

for (const btn of buttonsToForm) {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        scrollTo(form)
    })
}



// Валидация формы


// Слайдер (отзывы)
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 600,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 50,

    autoplay: {
        delay: 8000,
    },

    breakpoints: {
        // when window width is >= 1500px
        1200: {
          slidesPerView: 3,
    
        },
        // when window width is >= 480px
        769: {
          spaceBetween: 30,
          slidesPerView: 2,
        },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },

});


// Табы
const formatContainers = document.querySelectorAll('.formats__format-card')
const formatBtns = document.querySelectorAll('.formats__type-btn')

function showFormat() {
    let format = this.dataset.type

    for (const btn of formatBtns) {
        btn.classList.remove('active')
    }
    for (const cotnainer of formatContainers) {
        cotnainer.classList.remove('active')
    }

    document.querySelector(`[data-format="${format}"]`).classList.add('active')
    this.classList.add('active')
}

formatBtns.forEach(btn => {
    btn.addEventListener('click', showFormat)
})

// Бургер меню 
const burgerBtn = document.querySelector('.burger')
const burgerMenu = document.querySelector('.header__nav')
const navLinks = document.querySelectorAll('.nav__link')
console.log(navLinks)

burgerBtn.addEventListener('click', function(){
    burgerBtn.classList.toggle('burger--active')
    burgerMenu.classList.toggle('burger-nav--active')
    document.body.classList.toggle('scroll-forbidden')

    for (const link of navLinks) {
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('burger--active')
            burgerMenu.classList.remove('burger-nav--active')
            document.body.classList.remove('scroll-forbidden')
        })
    }

})