function animate (){

    let days = document.querySelectorAll(".days");
    let slots = document.querySelectorAll(".slots");

    if (days.style.height === "200px" ){
        days.style.height = "auto";
        slots.style.display = "block";
    }
}

document.querySelectorAll(".button").addEventListener("click", animate);