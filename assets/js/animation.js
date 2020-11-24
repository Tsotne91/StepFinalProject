    let buttons = document.querySelectorAll(".button");
    // let days = document.querySelectorAll(".days");
    let slots = document.querySelectorAll(".slot-wrapper");


    for ( let i = 0; i < buttons.length; i++){
        let button = buttons[i];
        function animate () {
                button.parentElement.parentElement.style.height = "auto";
                slots[i].style.display = "block";

        }
        button.addEventListener("click", animate);
    }

