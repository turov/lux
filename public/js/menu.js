const mobileHeader = document.querySelector(".mobile-header");
const openButton = mobileHeader.querySelector(".mobile-header__open-button");
const closeButton = mobileHeader.querySelector(".mobile-header__close-button");
const categories = mobileHeader.querySelectorAll(".mobile-header__nav-item--catalog");

const desktopHeader = document.querySelector(".desktop-header");
const desktopProductsLink = desktopHeader.querySelector(".desktop-header__main-item--products");


openButton.onclick = function (e)  {
    e.preventDefault();
    mobileHeader.classList.add("mobile-header--opened")
}

closeButton.onclick = function (e) {
    e.preventDefault();
    mobileHeader.classList.remove("mobile-header--opened")
}

categories.forEach(cat => {
    cat.onclick = function (e) {
        e.preventDefault();
        cat.classList.toggle("active")
    }
})

desktopProductsLink.onclick = (e) => {
    e.preventDefault();
    desktopHeader.classList.add("active");
}

document.onclick = (e) => {
    if (!e.target.matches('#desktopHeader, #desktopHeader *')) {
        desktopHeader.classList.remove("active");
    }
}

window.onscroll = function () {
    if (window.pageYOffset >= 400) {
        desktopHeader.classList.add("scrolled");
        mobileHeader.classList.add("scrolled");
    } else if (window.pageYOffset < 400) {
        desktopHeader.classList.remove("scrolled");
        mobileHeader.classList.remove("scrolled");
    }
}