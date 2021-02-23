const buttons = document.querySelectorAll(".button");
buttons.forEach(button=>{
    button.addEventListener("click", (event)=>{
         event.stopPropagation();
        const day = button.parentElement.parentElement;
        if (!day.classList.contains("openDay") && (!day.classList.contains("reserved"))) day.classList.add("openDay");
        else day.classList.remove("openDay");
    });
});
// modal window
// Get the modal window
const modal = document.querySelector(".myModal");
// Get days' that should be clicked to open the modal
const days = document.querySelectorAll(".days:not(.reserved)");
// Get the <span> element that closes the modal
const span = document.querySelector(".close");
const openDay = document.getElementsByClassName ("openDay");

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