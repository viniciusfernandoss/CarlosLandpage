const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting === true) {
                entry.target.classList.add("scroll-show")
            } else {
                entry.target.classList.remove("scroll-show")
            }
        })
    },
    { threshold: [0.45] }
)

const elements = document.querySelectorAll(".scroll-animation")

elements.forEach((entry) => {
    observer.observe(entry)
})

const elements2 = document.querySelectorAll(".scroll-animation2")

elements2.forEach((entry) => {
    observer.observe(entry)
})






//Destaque
const swiperTwo = new Swiper('.swiper-destaque-mobile', {
    slidesPerView: 1.5, // Exibe 1 card completo e metade do próximo
    spaceBetween: 20, // Espaço entre os slides
    loop: true,
    pagination: {
      el: '.swiper-destaque-mobile .swiper-pagination',
      clickable: true,
    },
});

//Cursos
const swiperOne = new Swiper('.swiper-cursos-mobile', {
    breakpoints: {
             0: {
                 slidesPerView: 1
             },
             992: {
                 slidesPerView: 2
             },
             1024: {
                 slidesPerView: 3
             }
    },
    spaceBetween: 30, // Espaço entre os slides
    loop: true,
    pagination: {
      el: '.swiper-cursos-mobile .swiper-pagination',
      clickable: true,
    },
    navigation: {
         nextEl: '.swiper-cursos-mobile .swiper-button-next',
         prevEl: '.swiper-cursos-mobile .swiper-button-prev',
    },
});


/*
========================================
                Cursos
========================================
*/
// const swiper = new Swiper('.slider-wrapper', {
//     loop: true,
//     grabCursor: true,
//     spaceBetween: 30,
  
//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         dynamicBullets: true
//     },
  
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     breakpoints: {
//         0: {
//             slidesPerView: 1
//         },
//         992: {
//             slidesPerView: 2
//         },
//         1024: {
//             slidesPerView: 3
//         }
//     }
// });