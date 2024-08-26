const dropdown = document.getElementById("dropdown-button");
const dropdownMenu = document.getElementById("the-dropdown")
const slides = document.querySelectorAll(".mySlides-fade")

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

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length -1;
let active = 0;
next.onclick = function() {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}

let refreshInterval = setInterval(() => {next.click()}, 3000);
function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {next.click()}, 3000);


}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    })
})

window.onresize = function(event) {
    reloadSlider();
};

