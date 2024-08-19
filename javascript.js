const dropdown = document.getElementById("dropdown-button");
const dropdownMenu = document.getElementById("the-dropdown")

dropdown.addEventListener("mouseover", ()=> {
    dropdownMenu.classList.toggle("show");
});

dropdown.addEventListener("mouseleave", () => {
    if (!dropdownMenu.matches(':hover')) {
        dropdownMenu.classList.remove("show")
    };
});

dropdownMenu.addEventListener("mouseleave", () => {
    if (!dropdownMenu.matches(':hover')) {
        dropdownMenu.classList.remove("show")
    };
});