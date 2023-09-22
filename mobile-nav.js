const Nav = document.querySelector(".primary-navigation");
const Toggle = document.querySelector(".checkbox");


Toggle.addEventListener("click", () => {
    const visibility = Nav.getAttribute("data-visible");
    

    if (visibility === "false") {
        Nav.setAttribute("data-visible", true);
        
       
    }  else if (visibility === "true") {
        Nav.setAttribute("data-visible", false);
        
    }
        
    
});

