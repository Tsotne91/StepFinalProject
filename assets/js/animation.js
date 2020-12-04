const buttons = document.querySelectorAll(".button");
buttons.forEach(button=>{
    button.addEventListener("click", ()=>{
        const day = button.parentElement.parentElement;
        if (day.classList.contains("openDay")) day.classList.remove("openDay");
        else day.classList.add("openDay");
    });
});

