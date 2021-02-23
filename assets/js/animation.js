const buttons = document.querySelectorAll(".button");
buttons.forEach(button=>{
    button.addEventListener("click", (event)=>{
         event.stopPropagation();
        const day = button.parentElement.parentElement;
        if (!day.classList.contains("openDay") && (!day.classList.contains("reserved"))) day.classList.add("openDay");
        else day.classList.remove("openDay");
    });
});

const modal = document.querySelector(".myModal");
const days = document.querySelectorAll(".days:not(.reserved)");
const span = document.querySelector(".close");

days.forEach( day => {
            day.addEventListener("click", () => {
             modal.classList.add("openModal");
             document.querySelector(".dateSelected").innerHTML = day.getAttribute("data-date");
            })
     });

span.onclick = function () {
    modal.classList.remove("openModal");
};

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// };