// 5. Escrever um algoritmo que lê um valor inteiro, calcula o fatorial desse número e
// mostra o resultado.
const prompt = require("prompt-sync")();
const calculaFatorial = () => {
  let numero;
  do {
    numero = Number(prompt("Digite um número inteiro e positivo"));
    if (numero == 0 || numero == 1) {
      console.log(`O fatorial de ${numero} é: 1`);
      return;
    }
  } while (isNaN(numero) || numero < 0);
  let resultado = 1;
  for (let index = 1; index <= numero; index++) {
    resultado *= index;
  }
  console.log(`O fatorial de ${numero} é: ${resultado}`);
};

calculaFatorial();
