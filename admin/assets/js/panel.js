const arrowContainer = document.querySelector('.icon-cont');
const arrow = document.querySelector('.fa-angle-double-down');
const dropDown = document.querySelector('.dropdown');

function handleDropDown() {
    let indicator = false;
    arrowContainer.addEventListener('click', () => {
        indicator = !indicator;
        if(indicator) {
            arrow.classList.add('rotate');
            dropDown.classList.add('show');      
        }

        else {
            arrow.classList.remove('rotate');
            dropDown.classList.remove('show');
        }
    });
}

handleDropDown();