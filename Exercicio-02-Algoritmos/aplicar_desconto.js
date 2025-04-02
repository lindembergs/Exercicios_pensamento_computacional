const prompt = require("prompt-sync")();
// rever a lógica do desconto
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

  if (valorTotal >= 100) {
    return (valorTotal -= (percentDesconto / 100) * valorTotal);
  }
  if (valorTotal < 100) {
    console.log(`Produto: ${nomeProduto}`);
    console.log(
      `Valor total sem desconto: R$ ${valorTotal.toFixed(
        2
      )}, comprando 100 R$ ou acima, você receberá 10% de desconto`
    );
  }

  console.log(`Produto: ${nomeProduto}`);
  console.log(
    `Valor total com desconto (se aplicável): R$ ${valorTotal.toFixed(2)}`
  );
};

aplicarDesconto();
