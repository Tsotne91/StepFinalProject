"use strict";

const section = document.querySelector('.gallery-and-text-cont');
const callback = function(entries) {
   if(entries[0].isIntersecting) {
       section.classList.add('reveal');
   }
};
const observer = new IntersectionObserver(callback, {
    threshold: 0.36
});

observer.observe(section);