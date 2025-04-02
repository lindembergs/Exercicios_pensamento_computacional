// 2 - Criar um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa
// e exiba a classificação (abaixo do peso, peso normal, sobrepeso, obesidade).

// IMC (kg/m²)	Classificação
// Menor que 18,5	Abaixo do peso
// 18,5 - 24,9	Peso normal
// 25,0 - 29,9	Sobrepeso
// 30,0 - 34,9	Obesidade grau 1
// 35,0 - 39,9	Obesidade grau 2 (severa)
// Maior ou igual a 40	Obesidade grau 3 (mórbida)
const prompt = require("prompt-sync")();
const calcularIMC = () => {
  let peso, altura, valorIMC;
  peso = Number(prompt("Digite o seu peso"));
  altura = Number(prompt("Digite sua altura separado por . ex: 1.72"));
  valorIMC = peso / (altura * altura);
  if (valorIMC < 18.5) {
    console.log(
      `Seu IMC é: ${valorIMC.toFixed(
        2
      )}, você faz parte da classificação: < 18,5 e está abaixo do peso `
    );
  }
  if (valorIMC == 18.5 && valorIMC <= 24.9) {
    console.log(
      `Seu IMC é: ${valorIMC.toFixed(
        2
      )}, você faz parte da classificação: 18,5 - 24,9	Peso normal `
    );
  }
  if (valorIMC >= 25 && valorIMC <= 29.9) {
    console.log(
      `Seu IMC é: ${valorIMC.toFixed(
        2
      )}, você faz parte da classificação: 25,0 - 29,9	Sobrepeso `
    );
  }
  if (valorIMC >= 30 && valorIMC <= 34.9) {
    console.log(
      `Seu IMC é: ${valorIMC.toFixed(
        2
      )}, você faz parte da classificação: 30,0 - 34,9	Obesidade grau 1 `
    );
  }
  if (valorIMC >= 35 && valorIMC <= 39.9) {
    console.log(
      `Seu IMC é: ${valorIMC.toFixed(
        2
      )}, você faz parte da classificação: 35,0 - 39,9	Obesidade grau 2 (severa) `
    );
  }
  if (valorIMC >= 40) {
    console.log(
      `Seu IMC é: ${valorIMC.toFixed(
        2
      )}, você faz parte da classificação: Maior ou igual a 40	Obesidade grau 3 (mórbida) `
    );
  }
};
calcularIMC();
