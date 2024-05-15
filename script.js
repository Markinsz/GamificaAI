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

let nSlides = slides.length

let resize = document.querySelector(".resize")

let Banner = document.querySelector(".banner")

Banner.classList.add(slides[slideAtual])

const Next = () => {
    Banner.classList.remove(slides[slideAtual])
    if (slideAtual < 2) {
        slideAtual++
    } else {
        slideAtual = 0
    }

    Banner.classList.add(slides[slideAtual])
    Banner.classList.add(slides[resize])
    
}

const Back = () => {
    Banner.classList.remove(slides[slideAtual])
    if (slideAtual > 0) {
        slideAtual--
    } else {
        slideAtual = 2
    }
    Banner.classList.add(slides[slideAtual])
}

const selecionarSlide = (indiceSlide) => {
    slides.forEach(slide => Banner.classList.remove(slide))

    slideAtual = indiceSlide

    Banner.classList.add(slides[indiceSlide])
}

let listaCases = [
    {
        imagem: "https://unsplash.it/600/400?image=13",
        descricao: "Uma empresa de tecnologia lança um desafio de gamificação onde os funcionários devem propor e implementar ideias inovadoras"
    },
    {
        imagem: "https://unsplash.it/600/400?image=24",
        descricao: "Uma empresa de consultoria cria uma narrativa interatica de gamificação para seu programa de treinamento"
    },
    {
        imagem: "https://unsplash.it/600/400?image=5",
        descricao: "Uma empresa de vendas implementa uma competição gamificada entre equipes que competem pelo topo do ranking"
    },
    {
        imagem: "https://unsplash.it/600/400?image=67",
        descricao: "Uma empresa de saúde promove o bem-estar dos funcionários através de um desafio de gamificação de condicionamento físico"
    }
]

const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")

    let template = ""

    listaCases.forEach(cardCase => {
        template += `<div class=card>
        <img src="${cardCase.imagem}" alt="">
        <p>${cardCase.descricao}</p>
        <button>Ver mais</button>
      </div>`
    })

    elementoLista.innerHTML = template
}