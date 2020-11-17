"use strict";
  function clickIcon() {
    const arrowDown = document.querySelector('#arrow-icon');
    const mobileNav = document.querySelector('.mobile-nav')
    let indicator = false;
    arrowDown.addEventListener("click", () => {
        indicator = !indicator;
        if(indicator == true) {
            arrowDown.classList.add("upwards");
            mobileNav.classList.remove('slideUp');
            mobileNav.classList.add('slideDown');
        } 
        else {
            arrowDown.classList.remove("upwards");
            mobileNav.classList.remove('slideDown');
            mobileNav.classList.add('slideUp');
        } 
    });
 }
 clickIcon();