let openNav = document.querySelector(".open-nav");
let closeNav = document.querySelector(".close-nav");

let tabs = document.querySelector(".nav-tabs");



openNav.addEventListener("click", function() {
    tabs.style.display = "flex";
    openNav.style.display = "none";
    closeNav.style.display="block";
});
closeNav.addEventListener("click", function() {
    tabs.style.display = "none";
    openNav.style.display = "block";
    closeNav.style.display="none";
});

