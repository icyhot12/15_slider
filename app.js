const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})

let counter = 0;

rightBtn.addEventListener('click', () => {
    counter++
    carousel();
});
leftBtn.addEventListener('click', () => {
    counter--
    carousel();
});

function carousel() {
    if(counter === slides.length) {
        counter = 0;
    } else if (counter < 0) {
        counter =slides.length -1
    }
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter*100}%)`
    })
};