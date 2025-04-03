const prompt = require("prompt-sync")();
const contarPalavras = () => {
  let palavra, numeroDePalavras;
  palavra = prompt("Digite uma palavra ");
  numeroDePalavras = palavra.split(" ");
  console.log(numeroDePalavras.length);
};
contarPalavras();
