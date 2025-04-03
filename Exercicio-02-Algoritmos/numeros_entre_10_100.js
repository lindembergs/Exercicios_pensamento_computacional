// 16 - Criar um algoritmo que leia 5 números e informe quantos estão entre 10 e 100 (inclusive).
const prompt = require("prompt-sync")();

const informaNumeroEntreXeY = () => {
  let n1, n2, n3, n4, n5;
  let numeros = [];
  n1 = parseFloat(prompt("Digite o primeiro número "));
  n2 = parseFloat(prompt("Digite o segundo número "));
  n3 = parseFloat(prompt("Digite o terceiro número "));
  n4 = parseFloat(prompt("Digite o quarto número "));
  n5 = parseFloat(prompt("Digite o quinto número "));
  numeros.push(n1, n2, n3, n4, n5);
  // console.log(numeros);
  let numerosEntre = numeros.filter((numero) => numero > 9 && numero <= 100);
  console.log(
    `O números digitados que estão entre 10 e 100 são: ${numerosEntre}`
  );
};
informaNumeroEntreXeY();
