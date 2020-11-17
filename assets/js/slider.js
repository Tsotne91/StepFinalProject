"use strict";
const plusSlides = (n) =>showSlides(slideIndex += n);
// const currentSlide = (n) => showSlides(slideIndex = n);
    
function showSlides(n) {
    const slides = document.querySelectorAll(".mySlides");
    // let i;
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    slides.forEach(slide=>{
        slide.style.display = "none";
    });
     slides[slideIndex-1].style.display = "block";  
}

let slideIndex = 1;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');


showSlides(slideIndex);
prevBtn.addEventListener('click', () => {
    plusSlides(-1);
});
nextBtn.addEventListener('click',() => {
    plusSlides(1)
});