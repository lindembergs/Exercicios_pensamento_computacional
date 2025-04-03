const prompt = require("prompt-sync")();

// 9 - Criar um algoritmo que leia um número inteiro e informe quantos dígitos ele possui.

const contaDigitosDeNumeros = () => {
  let numero, numeroString, numeroSplit;
  numero = parseInt(prompt("Digite um número inteiro "));
  numeroString = numero.toString();
  numeroSplit = numeroString.split("");
  console.log(numeroSplit);
  console.log();
  console.log(numeroSplit.length);
};

contaDigitosDeNumeros();
