let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone_barras")
let iconeX = document.getElementById("iconex")

function AbrirFecharMenu() {
    if (menu.classList.contains("menu_fechado")) {
        // Abrir menu
        menu.classList.remove("menu_fechado")
        // Mostrar icone X
        iconeX.style.display = "inline"
        // Esconder icone Barras
        iconeBarras.style.display = "none"
    } else {
        // Fechar menu
        menu.classList.add("menu_fechado")
        // Mostrar icone Barras
        iconeBarras.style.display = "inline"
        // Esconder icone X
        iconeX.style.display = "none"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

// Carrossel

let slides = [
    'fstBanner',
    'scndBanner',
    'trdBanner'
]

let slideAtual = 0

let Banner = document.querySelector(".banner")

Banner.classList.add(slides[slideAtual])

const Next = () => {
    Banner.classList.remove(slides[slideAtual])
    if(slideAtual < 2) {
        slideAtual++
    } else {
        slideAtual = 0
    }

    Banner.classList.add(slides[slideAtual])
}

const Back = () => {
    Banner.classList.remove(slides[slideAtual])
    if(slideAtual > 0) {
        slideAtual--
    } else {
        slideAtual = 2
    }
    Banner.classList.add(slides[slideAtual])
}