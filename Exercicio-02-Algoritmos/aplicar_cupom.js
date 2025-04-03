// 12 - Criar um algoritmo que leia o nome de um produto e o seu preço.
// Perguntar se o cliente tem cupom de desconto. Se tiver, aplicar 15% de desconto e mostrar o valor final.
const prompt = require("prompt-sync")();

const aplicarDesconto = () => {
  let nomeProduto,
    precoUnitario,
    valorTotal,
    cupom,
    percentDesconto = 15;

  nomeProduto = prompt("Digite o nome do produto: ");
  precoUnitario = parseFloat(prompt("Digite o preço unitário do produto: "));
  cupom = prompt(
    "Possui cupom? digite 1 ou sim para aplicar, caso não possua, digite qualquer outra coisa "
  );
  valorTotal = precoUnitario;
  if (cupom == 1 || cupom == "sim") {
    let desconto = (percentDesconto / 100) * valorTotal;
    valorTotal -= desconto;
    console.log(`Produto: ${nomeProduto}`);
    console.log(`Desconto aplicado: R$ ${desconto.toFixed(2)}`);
  } else {
    console.log(`Produto: ${nomeProduto}`);
    console.log(
      `Valor total sem desconto: R$ ${valorTotal.toFixed(
        2
      )}. Aplicando um cupom, você recebe 15% de desconto.`
    );
  }

  console.log(`Valor final: R$ ${valorTotal.toFixed(2)}`);
};

aplicarDesconto();
