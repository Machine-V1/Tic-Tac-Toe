const jogoDiv = document.getElementById("jogo-div");
const celulas = document.getElementsByClassName("celula");

Array.from(celulas).forEach((valor) => {
  valor.addEventListener("click", (event) => {
    clickCelula(event.target);
  });
});

let ehbola = true;
let vencedor = false;
let mapeamento = [
  [],
  [],
  [],
];
function preencherCelula(img, linha, coluna) {
  if (ehbola) {
    img.src = "circle_icon.svg";
    img.alt = "Bola";
    img.style.pointerEvents = "none";
    console.log(linha, coluna);
    mapeamento[linha][coluna] = "O";
    ehbola = false;
  } else {
    img.src = "x_icon.svg";
    img.alt = "X";
    img.style.pointerEvents = "none";
    console.log(linha, coluna);
    mapeamento[linha][coluna] = "X";
    ehbola = true;
  }
}
function clickCelula(divClicada) {
  if (!divClicada.querySelector("img") && !vencedor) {
    let linha = parseInt(divClicada.dataset.linha) - 1;
    let coluna = parseInt(divClicada.dataset.coluna) - 1;
    const img = document.createElement("img");
    preencherCelula(img, linha, coluna);
    divClicada.appendChild(img);
    console.log(mapeamento);
    checarVencedor();
  } else if (vencedor) {
    window.alert("venceu!!");
  }
}
// let mapeamento = [
//   ["x", "x", "x"],
//   ["vazio", "vazio", "vazio"],
//   ["vazio", "vazio", "vazio"],
// ];
function checarVencedor() {
  // desenvolver a logica obs: nao esquecer os metodos de arrays
}
