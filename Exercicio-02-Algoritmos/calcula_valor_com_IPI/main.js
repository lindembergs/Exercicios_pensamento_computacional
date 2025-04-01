// 6. Escrever um algoritmo que lê:
// - a percentagem do IPI a ser acrescido no valor das peças
// - o código da peça 1, valor unitário da peça 1, quantidade de peças 1
// - o código da peça 2, valor unitário da peça 2, quantidade de peças 2
// O algoritmo deve calcular o valor total a ser pago e apresentar o resultado.
// Fórmula : (valor1*quant1 + valor2*quant2)*(IPI/100 + 1)

const calculaValorComIPI = () => {
  let codigoPeca1,
    codigoPeca2,
    valorDapeca1,
    valorDapeca2,
    quantidadeDepecas1,
    quantidadeDepecas2;
  let aliquota;
  codigoPeca1 = Number(window.prompt("Digite o código da primeira peça"));
  valorDapeca1 = Number(window.prompt("Digite o valor da primeira peça"));
  quantidadeDepecas1 = Number(window.prompt("Digite a quantidade de peças"));
  codigoPeca2 = Number(window.prompt("Digite o código da segunda peça"));
  valorDapeca2 = Number(window.prompt("Digite o valor da segunda peça"));
  quantidadeDepecas2 = Number(window.prompt("Digite a quantidade de peças"));
  // continuar o código com o IPI
  const pecas = {
    peca1: {
      codigo: codigoPeca1,
      valor: valorDapeca1,
      quantidadeDepecas: quantidadeDepecas1,
    },
    peca2: {
      codigo: codigoPeca2,
      valor: valorDapeca2,
      quantidadeDepecas: quantidadeDepecas2,
    },
  };
  console.log(pecas);
};
calculaValorComIPI();
