// 6. Escrever um algoritmo que lê:
// - a percentagem do IPI a ser acrescido no valor das peças
// - o código da peça 1, valor unitário da peça 1, quantidade de peças 1
// - o código da peça 2, valor unitário da peça 2, quantidade de peças 2
// O algoritmo deve calcular o valor total a ser pago e apresentar o resultado.
// Fórmula : (valor1*quant1 + valor2*quant2)*(IPI/100 + 1)
const prompt = require("prompt-sync")();
const calculaValorComIPI = () => {
  let codigoPeca1,
    codigoPeca2,
    valorDapeca1,
    valorDapeca2,
    quantidadeDepecas1,
    quantidadeDepecas2,
    IPI,
    valorTotalSemIPI,
    valorTotalComIPI;
  codigoPeca1 = Number(prompt("Digite o código da primeira peça "));
  valorDapeca1 = Number(prompt("Digite o valor da primeira peça "));
  quantidadeDepecas1 = Number(prompt("Digite a quantidade de peças "));
  codigoPeca2 = Number(prompt("Digite o código da segunda peça "));
  valorDapeca2 = Number(prompt("Digite o valor da segunda peça "));
  quantidadeDepecas2 = Number(prompt("Digite a quantidade de peças "));
  IPI = Number(prompt("Digite o valor do IPI "));
  IPI += IPI / 100 + 1;
  valorTotalSemIPI =
    valorDapeca1 * quantidadeDepecas1 + valorDapeca2 * quantidadeDepecas2;
  valorTotalComIPI = valorTotalSemIPI + IPI;
  console.log(
    `O valor total das peças sem IPI é: ${valorTotalSemIPI}, e o valor total com a adição do IPI é: ${valorTotalComIPI}`
  );
};
calculaValorComIPI();
