const openBtn = document.querySelector("#open")
const closeBtn = document.querySelector("#close")
const nav = document.querySelector("header nav")

closeBtn.classList.add("hidden")

if (window.innerWidth < 900) {
    nav.classList.add("hidden")
}

window.addEventListener("resize", () => {
    if (window.innerWidth < 900) {
        nav.classList.add("hidden")
    } else {
        nav.classList.remove("hidden")
    }
})

openBtn.addEventListener('click', () => {
    nav.classList.remove("hidden")
    closeBtn.classList.remove("hidden")
    openBtn.classList.add("hidden")
})

closeBtn.addEventListener('click', () => {
    nav.classList.add("hidden")
    openBtn.classList.remove("hidden")
    closeBtn.classList.add("hidden")
})