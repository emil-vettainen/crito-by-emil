// Insperation från flera källor, där jag anpassat koden att funka efter min sida och mina önskemål.

const Nav = document.querySelector(".primary-navigation");
const Toggle = document.querySelector(".checkbox");

Toggle.addEventListener("click", () => {
    const visibility = Nav.getAttribute("data-visible");
    
    if (visibility === "false") {
        Nav.setAttribute("data-visible", true);
        document.body.style.overflow = "hidden"; 
       
    }  else if (visibility === "true") {
        Nav.setAttribute("data-visible", false);
        document.body.style.overflow = "auto"; 
    }
        
});








