// 1. Crie um algoritmo que leia um número diferente de zero e diga se este número é
// positivo ou negativo.

// Obs, é necessário rodar a aplicação no navegador.

const numero = window.prompt("Digite um número inteiro diferente de 0");
const numeroConvertido = BigInt(numero);
const verificaNumeroMaiorOuMenor = (numeroConvertido) => {
  while (numeroConvertido == 0) {
    alert(
      `O número digitado foi ${numeroConvertido}, por favor, digite um número diferent`
    );
    numeroConvertido = BigInt(window.prompt("Digite um número diferente de 0"));
  }
  if (numeroConvertido > 0) {
    alert(`O número digitado foi ${numeroConvertido} e é positivo`);
  }
  if (numeroConvertido < 0) {
    alert(`O número digitado foi ${numeroConvertido} e é negativo`);
  }
};
verificaNumeroMaiorOuMenor(numero);
