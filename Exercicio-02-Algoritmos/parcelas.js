// 3 - Criar um algoritmo que leia o valor de uma compra e o número de parcelas. Em seguida, calcule e exiba o valor de cada parcela.
const prompt = require("prompt-sync")();
const calcularValorDasParcelas = () => {
  let valorDaCompra, quantidadeDeParcelas, valorDeCadaParcela;
  valorDaCompra = Number(prompt("Digite o valor da compra"));
  quantidadeDeParcelas = Number(prompt("Digite a quantidade de parcelas"));

  valorDeCadaParcela = valorDaCompra / quantidadeDeParcelas;
  console.log(
    `O valor da compra é ${valorDaCompra}, a quantidade de parcelas escolhida foi: ${quantidadeDeParcelas}. O valor de cada parcela é: ${valorDeCadaParcela}`
  );
};

calcularValorDasParcelas();
