    let buttons = document.querySelectorAll(".button");

       buttons.forEach(
           function(button){
                    button.addEventListener("click", function () {
                            let day = button.parentElement.parentElement;
                         if (day.classList.contains("openDay")) {
                                 day.classList.remove("openDay");
                          } else {
                                 day.classList.add("openDay");
                                  }
                          });
                 });


    // for ( let i = 0; i < buttons.length; i++){
    //     let button = buttons[i];
    //     function animate () {
    //             button.parentElement.parentElement.style.height = "auto";
    //             slots[i].style.display = "block";
    //
    //     }
    //     button.addEventListener("click", animate);
    // }