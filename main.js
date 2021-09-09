const menuBtn = document.querySelector(".hamburger-menu")
const navList = document.querySelector(".nav-list")
const navLinks = document.querySelectorAll(".nav-links")

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("show-list")
})

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navList.classList.remove("show-list")
    })
})

window.addEventListener("scroll", () => {
    navList.classList.remove("show-list")
})
