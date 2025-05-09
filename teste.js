// acessar o vetor na diagonal e armazenar em um vetor
let mapeamento = [
  ["a", "d", "g"],
  ["b", "e", "h"],
  ["c", "f", "i"],
];
let n = mapeamento.length;
// mapeamento[linha][coluna]
let vetor = [];

for (let i = 0; i < 3; i++) {
  // aqui acessa a linha
  vetor.push(mapeamento[i][i]);
}
console.log(vetor);
vetor = [];
//

for (let i = 0; i < 3; i++) {
  // aqui acessa a linha
  vetor.push(mapeamento[i][2-i]);
  
}
console.log(vetor);