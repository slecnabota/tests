document.addEventListener("DOMContentLoaded", () => {
    const btnUp = document.getElementById("btnUp");
    const openHeaderBtn = document.getElementById("openHeaderBtn");
    const closeHeaderBtn = document.getElementById("closeHeaderBtn");
    const header = document.querySelector(".header");
    const menu = document.querySelector(".header__menu");
    const menuNav = document.querySelector(".header__menu-nav");

    const toggleMenu = () => {
        if (!menu) return;
        menu.classList.toggle("active");
        document.body.classList.toggle("lock");
    };

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    const handleScroll = () => {
        if (!header) return;
        header.classList.toggle("scrolled", window.scrollY > 0);
    };


    btnUp?.addEventListener("click", scrollToTop);
    openHeaderBtn?.addEventListener("click", toggleMenu);
    closeHeaderBtn?.addEventListener("click", toggleMenu);
    menuNav.addEventListener("click", toggleMenu);
    window.addEventListener("scroll", handleScroll);
});