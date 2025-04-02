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
    quantidadeDepecas2,
    IPI,
    valorTotalSemIPI,
    valorTotalComIPI;
  codigoPeca1 = Number(window.prompt("Digite o código da primeira peça"));
  valorDapeca1 = Number(window.prompt("Digite o valor da primeira peça"));
  quantidadeDepecas1 = Number(window.prompt("Digite a quantidade de peças"));
  codigoPeca2 = Number(window.prompt("Digite o código da segunda peça"));
  valorDapeca2 = Number(window.prompt("Digite o valor da segunda peça"));
  quantidadeDepecas2 = Number(window.prompt("Digite a quantidade de peças"));
  IPI = Number(window.prompt("Digite o valor do IPI"));
  IPI += IPI / 100 + 1;
  valorTotalSemIPI =
    valorDapeca1 * quantidadeDepecas1 + valorDapeca2 * quantidadeDepecas2;
  valorTotalComIPI = valorTotalSemIPI + IPI;
  const pecas = [
    {
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
    },
  ];
  // Os códigos da linha 44 a 52 é funcional, porém desnecessário para o exercício
  // const divRef = document.querySelector(".caixa");

  // pecas.map((peca) => {
  //   let tagp = document.createElement("p");
  //   console.log(peca);
  //   // tagp.innerText = JSON.stringify(peca, null, 2);
  //   tagp.innerText = `Código da primeira peça: ${peca.peca1.codigo}, preço da primeira peça: ${peca.peca1.valor}, quantidade da primeira peça: ${peca.peca1.quantidadeDepecas} <br> Código da segunda peça: ${peca.peca1.codigo}, preço da segunda peça: ${peca.peca1.valor}, quantidade da segunda peça: ${peca.peca1.quantidadeDepecas}, `;
  //   divRef.appendChild(tagp);
  // });

  alert(
    `O valor total das peças sem IPI é: ${valorTotalSemIPI}, e o valor total com a adição do IPI é: ${valorTotalComIPI}`
  );
};
calculaValorComIPI();
