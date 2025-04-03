// 13 - Criar um algoritmo que leia uma palavra e verifique se ela é um
// palíndromo (ou seja, se é igual quando lida de trás para frente). Exemplo: “arara”, “reviver”.
const prompt = require("prompt-sync")();
const ehPalindromo = () => {
  let palavra, palavraInvertida;
  palavra = prompt("Digite uma palavra ");
  palavraInvertida = palavra.split("").reverse().join("");
  if (palavra == palavraInvertida) {
    console.log(true);
  } else {
    console.log(false);
  }
};
ehPalindromo();
