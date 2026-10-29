//Botão Voltar ao topo
import { voltarTopo } from "./voltar-topo.js";
voltarTopo();

//carrossel
const slides = document.querySelector(".slides");
const imgs = document.querySelectorAll(".slides img");
const esquerda = document.querySelector(".esquerda");
const direita = document.querySelector(".direita");

const tamanhoLista = imgs.length - 1;
let contador = 0;

esquerda.addEventListener('click', ()=> {

    contador--;
    if (contador < 0) {
        contador = tamanhoLista;
    }
    atualizarCarrossel()
    console.log(contador)
});

direita.addEventListener('click', ()=> {
    incrementarContador()
    atualizarCarrossel()
    console.log(contador)
});

const incrementarContador = () => {
    contador++;
    if (contador > tamanhoLista) contador = 0;
}

const atualizarCarrossel = () => {
    slides.style.transform = `translateX(-${contador * 100}%)`;
}

setInterval(() => {
    incrementarContador();
    atualizarCarrossel();
}, 4000);