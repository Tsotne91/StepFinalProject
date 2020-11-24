    let buttons = document.querySelectorAll(".button");
    let days = document.querySelectorAll(".days");
    let slots = document.querySelectorAll(".slot-wrapper");

function animate () {

            for (let i = 0; i < days.length; i++) {
                days[i].style.height = "auto";
                slots[i].style.display = "block";
            }
}

    for ( let j = 0; j < buttons.length; j++){
        let button = buttons[j];
        button.addEventListener("click", animate);
    }