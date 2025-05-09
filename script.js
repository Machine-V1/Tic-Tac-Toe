const jogoDiv = document.getElementById("jogo-div");
const celulas = document.getElementsByClassName("celula");

Array.from(celulas).forEach((valor) => {
  valor.addEventListener("click", (event) => {
    clickCelula(event.target);
  });
});

let ehbola = true;
let vencedor = { venceu: false, quemVenceu: "" };
let mapeamento = [
  ["vazio", "vazio", "vazio"],
  ["vazio", "vazio", "vazio"],
  ["vazio", "vazio", "vazio"],
];
function preencherCelula(img, linha, coluna) {
  if (ehbola) {
    img.src = "circle_icon.svg";
    img.alt = "Bola";
    img.style.pointerEvents = "none";

    mapeamento[linha][coluna] = "O";
    ehbola = false;
  } else {
    img.src = "x_icon.svg";
    img.alt = "X";
    img.style.pointerEvents = "none";

    mapeamento[linha][coluna] = "X";
    ehbola = true;
  }
}
function clickCelula(divClicada) {
  if (!divClicada.querySelector("img") && !vencedor.venceu) {
    let linha = parseInt(divClicada.dataset.linha) - 1;
    let coluna = parseInt(divClicada.dataset.coluna) - 1;
    const img = document.createElement("img");
    preencherCelula(img, linha, coluna);
    divClicada.appendChild(img);
    console.log(mapeamento);
    checarVencedor();
  }
}

function checarVencedor() {
  // desenvolver a logica obs: nao esquecer os metodos de arrays
  let checkVencedor = null;
  if (checkLinha()) {
    checkVencedor = checkLinha();
  } else if (checkColuna()) {
    checkVencedor = checkColuna();
  }
  checkColuna();
  console.log(checkVencedor);

  if (checkVencedor == "O") {
    vencedor.venceu = true;
    vencedor.quemVenceu = "O";
    window.alert(vencedor.quemVenceu + " venceu!!");
  } else if (checkVencedor == "X") {
    vencedor.venceu = true;
    vencedor.quemVenceu = "X";

    window.alert(vencedor.quemVenceu + " venceu!!");
  }
}

function checkLinha() {
  let checkLinhaString;
  for (let linha of mapeamento) {
    checkLinhaString = linha.reduce((total, valor) => (total += valor));

    if (checkLinhaString === "OOO") {
      return "O";
    } else if (checkLinhaString === "XXX") {
      return "X";
    }
  }
  return null;
}
// let mapeamento = [
//   ["O", "O", "X"],
//   ["X", "X", "X"],
//   ["O", "X", "O"],
// ];
function checkColuna() {
  let checkColunaVetor = [];
  let checkColunaString;
  for (let i = 0; i < mapeamento.length; i++) {
    for (linha of mapeamento) {
      checkColunaVetor.push(linha[i]);
    }

    checkColunaString = checkColunaVetor.reduce(
      (total, valor) => (total += valor)
    );
    if (checkColunaString === "OOO") {
      return "O";
    } else if (checkColunaString === "XXX") {
      return "X";
    }
    checkColunaVetor = [];
  }
}

function checkDiagonal() {
  // 😥
  let checkDiagonalVetor = [];
  let checkDiagonalVetorString = "";
  (function () {
    for (let i = 0; i < 3; i++) {
      // diagonal esquerda -> direita
      vetor.push(mapeamento[i][i]);
      // fazer aqui pra retornar o falor
    }
  })();
}
