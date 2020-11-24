
    let buttons = document.getElementsByClassName("button");
    let days = document.querySelectorAll(".days");
    let slots = document.querySelectorAll(".slots");

function animate () {
    for (let i = 0; i < days.length; i++)
        if (days[i].style.height === "200px") {
            days[i].style.height = "auto";
            for (let j = 0; j < slots.length; j++) {
                slots[j].style.display = "block";
            }
        }
}
    for ( let k=0; k < buttons.length; k++){
        let button = buttons[k];
        button.addEventListener("click", animate);
    }