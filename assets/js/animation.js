const buttons = document.querySelectorAll(".button");
buttons.forEach(button=>{
    button.addEventListener("click", (event)=>{
         event.stopPropagation();
        const day = button.parentElement.parentElement;
        if (day.classList.contains("openDay")) day.classList.remove("openDay");
        else day.classList.add("openDay");
    });
});
// modal window
// Get the modal window
const modal = document.querySelectorAll(".myModal")[0];
// Get days' array that should be clicked to open the modal
const days = document.querySelectorAll(".days:not(.reserved)");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
const openDay = document.getElementsByClassName ("openDay");


days.forEach( day => {
            day.addEventListener("click", () => {
            if (day.classList.contains("openDay"))  modal.classList.add("openModal");
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