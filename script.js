import { produtos } from "./src/data/produtos.js";

const divPromocao = document.getElementById("div-promocao")
const divMasculino = document.getElementById("div-masculino")
const divFeminino = document.getElementById("div-feminino")

window.addEventListener("load", () => {
    produtos.forEach((element, index) => {
        if (element.preco_promocao != false) {
            divPromocao.innerHTML += `
        <div class="produto">
            <h4>${element.titulo}</h4>
            <p>${element.preco}/<p>
            <p>${element.preco_promocao}</p>
            <p>${element.novidade}</p>
            <p>${element.genero}</p>
            <p>${element.categoria}</p>
        </div>
    `
        }
    })
    produtos.forEach((element, index) => {
        if (element.genero === 'masculino') {
            divMasculino.innerHTML += `
        <div class="produto">
            <h4>${element.titulo}</h4>
            <p>${element.preco}/<p>
            <p>${element.preco_promocao}</p>
            <p>${element.novidade}</p>
            <p>${element.genero}</p>
            <p>${element.categoria}</p>
        </div>
        
        `
        }
    })
    produtos.forEach((element, index) => {
        if(element.genero === 'feminino') {
        divFeminino.innerHTML += `
        <div class="produto">
            <h4>${element.titulo}</h4>
            <p>${element.preco}/<p>
            <p>${element.preco_promocao}</p>
            <p>${element.novidade}</p>
            <p>${element.genero}</p>
            <p>${element.categoria}</p>
        </div>
    `
    }
})
});

