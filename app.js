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

// Tabs

let tab = function() {
    let tabNav = document.querySelectorAll(".tabs-nav-item");
    let tabContent = document.querySelectorAll(".tab-nav-content");
    let tabName;

    tabNav.forEach( item=> {
        item.addEventListener("click", selectTabNav)
    })
    
    function selectTabNav() {
        tabNav.forEach( item=> {
            item.classList.remove("is-active");
        })
        this.classList.add("is-active");
        tabName = this.getAttribute("data-tab-name");
        selectTabContent(tabName)
    }

    function selectTabContent(tabName) {
        tabContent.forEach( item=> {
            if(item.classList.contains(tabName)) {
                item.classList.add("is-active");
            } else {
                item.classList.remove("is-active");
            }
        })
    }
}
tab()
