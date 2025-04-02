// 1. Crie um algoritmo que leia um número diferente de zero e diga se este número é
// positivo ou negativo.
const prompt = require("prompt-sync")();
const numero = prompt("Digite um número inteiro diferente de 0");
const numeroConvertido = BigInt(numero);
const verificaNumeroMaiorOuMenor = (numeroConvertido) => {
  while (numeroConvertido == 0) {
    console.log(
      `O número digitado foi ${numeroConvertido}, por favor, digite um número diferente`
    );
    numeroConvertido = BigInt(prompt("Digite um número diferente de 0"));
  }
  if (numeroConvertido > 0) {
    console.log(`O número digitado foi ${numeroConvertido} e é positivo`);
  }
  if (numeroConvertido < 0) {
    console.log(`O número digitado foi ${numeroConvertido} e é negativo`);
  }
};
verificaNumeroMaiorOuMenor(numero);
