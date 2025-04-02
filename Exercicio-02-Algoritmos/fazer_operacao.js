// 6 - Criar um algoritmo que leia dois números e uma operação (+, -, *, /). Com base no operador informado, realizar a operação
// entre os dois números e exibir o resultado. Se for divisão por zero, exibir mensagem de erro.
const prompt = require("prompt-sync")();

const fazerOperacao = () => {
  let n1, n2, operador, resultado;
  n1 = parseFloat(prompt("Digite o primeiro número "));
  operador = prompt("Digite um operador (+, -, *, /) ");
  n2 = parseFloat(prompt("Digite o segundo número "));
  if (operador == "-") {
    resultado = n1 - n2;
    console.log(`O resultado de ${n1} - ${n2} é: ${resultado}`);
  }
  if (operador == "+") {
    resultado = n1 + n2;
    console.log(`O resultado de ${n1} + ${n2} é: ${resultado}`);
  }
  if (operador == "*" && n2 != 0) {
    resultado = n1 * n2;
    console.log(`O resultado de ${n1} * ${n2} é: ${resultado}`);
  }
  if (operador == "*" && n2 == 0) {
    resultado = n1 * n2;
    console.log(`Erro, não é possível multiplicar por ${n2}`);
  }
  if (operador == "/") {
    resultado = n1 / n2;
    console.log(`O resultado de ${n1} / ${n2} é: ${resultado}`);
  }
};

fazerOperacao();
