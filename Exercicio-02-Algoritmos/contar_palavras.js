// 20 - Criar um algoritmo que leia uma frase e exiba quantas palavras ela possui (considere que as palavras estão separadas por espaço).
const prompt = require("prompt-sync")();
const contarPalavras = () => {
  let palavra, numeroDePalavras;
  palavra = prompt("Digite uma palavra ");
  numeroDePalavras = palavra.split(" ");
  console.log(numeroDePalavras.length);
};
contarPalavras();
