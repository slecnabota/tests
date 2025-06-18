function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

function openMenu() {
    const menu = document.querySelector(".header__menu");
    menu.classList.toggle("active")
    document.body.classList.toggle("lock");
}

function closeMenu() {
    const menu = document.querySelector(".header__menu");
    menu.classList.toggle("active")
    document.body.classList.toggle("lock");
}