// Toggles Side Nav
const hamburger = document.querySelector(".hamburger");
const exit = document.querySelector(".exit");
const mainNav = document.querySelector(".main-nav");

const sideNavToggle = () => {
    const status = mainNav.getAttribute("data-open");
    if (status === "false") {
        mainNav.setAttribute("data-open", "true");
        
    } else {
        mainNav.setAttribute("data-open", "false");
    }
};

hamburger.addEventListener("click", sideNavToggle);
exit.addEventListener("click", sideNavToggle);
