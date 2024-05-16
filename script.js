let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone_barras")
let iconeX = document.getElementById("iconex")

function AbrirFecharMenu() {
    
    // Se o menu está fechado
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
     // Remove slide anterior
    Banner.classList.remove(slides[slideAtual])

    // numeroSlides = 3
    // numeroSlides - 1 -> 2
    // estou no ultimo? 2

    // [0, 1, 2]

    if (slideAtual < 2) {
        slideAtual++
    } else {
        slideAtual = 0
    }
    // Renderiza o slideAtual
    Banner.classList.add(slides[slideAtual])
    
}

const Back = () => {
    // Remove slide anterior

    // numeroSlides = 3
    // numeroSlides - 1 -> 2

    // [0, 1, 2]

    Banner.classList.remove(slides[slideAtual])
    if (slideAtual > 0) {
        slideAtual--
    } else {
        slideAtual = 2
    }

    // Renderiza o slideAtual
    Banner.classList.add(slides[slideAtual])
}

const selecionarSlide = (indiceSlide) => {
    slides.forEach(slide => Banner.classList.remove(slide))

    slideAtual = indiceSlide

    Banner.classList.add(slides[indiceSlide])
}

let listaCases = [

]

const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")

    // Template Strings
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

const carregarCases = () => {
    fetch("http://localhost:3000/cases")
    .then((resposta) => resposta.json())
    .then ((dados) => {
        listaCases = dados
        renderizarCases
        .catch(erro => console.error(erro))
    })
}

0 > 2

const solicitarOrcamento = () => {
    // Pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").value

    console.log(valorNome);
    console.log(valorEmail);
    console.log(valorDescricao);
    
    // Organizar objetos com os valores
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    // Enviar requisição para a API
    fetch("http://127.0.0.1:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => resposta.json())
    .catch(erro => console.error(erro))
        // Limpar os campos
        // Mostrar alert com msg de sucesso
        // CASO ERRO - alert com msg erro
}