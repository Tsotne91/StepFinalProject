//Calendar day opening animation

document.querySelectorAll(".button").forEach(button=>{
    button.addEventListener("click", ()=>{
        const day = button.parentElement.parentElement;
        if (!day.classList.contains("openDay") && (!day.classList.contains("reserved"))) day.classList.add("openDay");
        else day.classList.remove("openDay");
    });
});

//Select all checkbox functionality

let checkboxes =  document.querySelectorAll(".checkbox");
let select_all = document.querySelector("#selectAll");
    select_all.addEventListener("change", () => {
        for (let checkbox of checkboxes) checkbox.checked = !!select_all.checked;
    })

//select-dropdown:

