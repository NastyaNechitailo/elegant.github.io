let menu = document.querySelector(".menu");
let navMenu = document.querySelector(".nav-menu");
let menuWord = document.querySelector(".menu-word");
let span = document.querySelectorAll(".span");


navMenu.addEventListener("click", function() {
    menu.classList.toggle("hidden-menu");
    menuWord.classList.toggle("nav-menu-word-click");
        
    span.forEach(function(i) {
        i.classList.toggle("nav-menu-span-click");
    });
})

