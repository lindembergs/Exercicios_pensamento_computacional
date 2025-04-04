// 7 - Criar um algoritmo que leia o nome de um produto, a
// quantidade comprada e o preço unitário. Calcular o total da compra e aplicar um desconto:
// Acima de R$100,00 → 10% de desconto
// Senão, preço normal
const prompt = require("prompt-sync")();

const aplicarDesconto = () => {
  let nomeProduto,
    quantidadeDeProdutos,
    precoUnitario,
    valorTotal,
    percentDesconto = 10;

  nomeProduto = prompt("Digite o nome do produto: ");
  precoUnitario = parseFloat(prompt("Digite o preço unitário do produto: "));
  quantidadeDeProdutos = parseInt(prompt("Digite a quantidade de produtos: "));

  valorTotal = precoUnitario * quantidadeDeProdutos;

  if (valorTotal > 100) {
    let desconto = (percentDesconto / 100) * valorTotal;
    valorTotal -= desconto;
    console.log(`Produto: ${nomeProduto}`);
    console.log(`Desconto aplicado: R$ ${desconto.toFixed(2)}`);
  } else {
    console.log(`Produto: ${nomeProduto}`);
    console.log(
      `Valor total sem desconto: R$ ${valorTotal.toFixed(
        2
      )}. Comprando acima de R$ 100, você recebe 10% de desconto.`
    );
  }

  console.log(`Valor final: R$ ${valorTotal.toFixed(2)}`);
};

aplicarDesconto();
