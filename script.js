const jogoDiv = document.getElementById("jogo-div");
const celulas = document.getElementsByClassName("celula");

// adiciona um evento a todas as celulas
Array.from(celulas).forEach((valor) => {
  valor.addEventListener("click", (event) => {
    clickCelula(event.target);
  });
});

let ehbola = true;
let vencedor = { venceu: false, quemVenceu: "" }; // objeto do vencedor

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
    checarVencedor();
  }
}

function checarVencedor() {
  
  let checkVencedor = null;
  if (checkLinha()) {
    checkVencedor = checkLinha();
  } else if (checkColuna()) {
    checkVencedor = checkColuna();
  } else if (checkDiagonal()) {
    checkVencedor = checkDiagonal();
  }

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

  if (checkEsquerda() == "OOO") {
    return "O";
  } else {
    resetarVetor();
  }
  if (checkEsquerda() == "XXX") {
    return "X";
  } else {
    resetarVetor();
  }
  if (checkDireita() == "OOO") {
    return "O";
  } else {
    resetarVetor();
  }
  if (checkDireita() == "XXX") {
    return "X";
  } else {
    resetarVetor();
  }

  function checkEsquerda() {
    for (let i = 0; i < 3; i++) {
      // diagonal esquerda -> direita
      checkDiagonalVetor.push(mapeamento[i][i]);
      
    }
    
    return checkDiagonalVetor.reduce((total, valor) => (total += valor));
  }
  function checkDireita() {
    for (let i = 0; i < 3; i++) {
      // diagonal direita -> esquerda
      checkDiagonalVetor.push(mapeamento[i][2 - i]);
    }
    
    return checkDiagonalVetor.reduce((total, valor) => (total += valor));
  }
  function resetarVetor(){
    checkDiagonalVetor = [];
  }
}
