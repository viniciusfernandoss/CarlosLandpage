/*
========================================
            ScrollReveal
========================================
*/
window.revelar = ScrollReveal({reset:true})

//Sobre
revelar.reveal('.animacao-txt-sobre', {
    duration: 1500,
    distance: '120px',
    reset: false
})

//Destaque/Cursos
revelar.reveal('.animacao-card1', {
    duration: 1000,
    distance: '120px',
    delay: 200,
    reset: false
})
revelar.reveal('.animacao-card2', {
    duration: 1000,
    distance: '120px',
    delay: 400,
    reset: false
})
revelar.reveal('.animacao-card3', {
    duration: 1000,
    distance: '120px',
    delay: 600,
    reset: false
})