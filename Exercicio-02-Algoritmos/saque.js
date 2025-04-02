const prompt = require("prompt-sync")();
function sacarDinheiro() {
  let valor = parseInt(prompt("Digite o valor do saque:"));

  if (isNaN(valor) || valor <= 0) {
    return "Valor inválido! Tente novamente.";
  }

  let notas = [100, 50, 20, 10, 5];
  let resultado = "";
  let restante = valor;

  for (let nota of notas) {
    let qtd = Math.floor(restante / nota);
    if (qtd > 0) {
      resultado += `${qtd} nota(s) de R$${nota}\n`;
      restante %= nota;
    }
  }

  return restante > 0 ? "Não é possível sacar esse valor." : resultado;
}

console.log(sacarDinheiro());
