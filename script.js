const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector("ul")
const closeMenuButton = document.querySelector(".close-icon")
const overlay = document.querySelector(".overlay")

hamburger.addEventListener("click", (e) => {
    if (menu.classList.contains("open")) {
        menu.classList.remove("open")
    } else {
        menu.classList.add("open")
    }
    if (menu.classList.contains("open")) {
        disableScroll()
        overlay.classList.add("overlay-popup")
    }
})

closeMenuButton.addEventListener("click", (e) => {
    menu.classList.remove("open")
    overlayremove()
})
overlay.addEventListener("click", () => {
    menu.classList.remove("open")
    overlay.classList.remove("overlay-popup")
    enableScroll()
})

function disableScroll() {
    document.body.classList.add("stop-scrolling")
}

function enableScroll() {
    document.body.classList.remove("stop-scrolling")
}

function overlayremove() {
    enableScroll()
    overlay.classList.remove("overlay-popup")
}

// faq sections
const faq = document.querySelector(".faq")
const faqQuestion = faq.querySelector(".question")

document.addEventListener("click", (e) => {
    e.preventDefault()
    if (!e.target.matches(".question") &&
        !e.target.matches("i") &&
        !e.target.matches("span")
    )
        return
    const card = e.target.closest(".card")
    card.classList.toggle("show")
})