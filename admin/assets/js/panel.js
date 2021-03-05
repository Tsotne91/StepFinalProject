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

function preview_image(event) {
    let reader = new FileReader();
    reader.onload = function()   {
        let output = document.getElementById('output_image');
        output.src = reader.result;
        output.style.border = "solid red 3px";
    }
    reader.readAsDataURL(event.target.files[0]);
}