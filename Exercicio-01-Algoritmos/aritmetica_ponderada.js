// 4. Um usuário deseja um algoritmo onde possa escolher que tipo de média deseja
// calcular a partir de 3 notas. Faça um algoritmo que leia as notas, a opção escolhida
// pelo usuário e calcule a média.
// 1 -aritmética
// 2 - ponderada (pesos: 3,3,4)
const prompt = require("prompt-sync")();
let nota1, nota2, nota3;
let peso1 = 3;
let peso2 = 3;
let peso3 = 4;
const calcularAritmeticaPonderada = () => {
  nota1 = Number(prompt("Digite a primeira nota"));
  nota2 = Number(prompt("Digite a segunda nota"));
  nota3 = Number(prompt("Digite a terceira nota"));
  let option = Number(prompt("Digite 1 para aritmética ou 2 para ponderada"));
  let totalNotas = nota1 + nota2 + nota3;
  switch (option) {
    case 1:
      const mediaAriametica = totalNotas / 3;
      console.log(
        `você escolheu a opção ${option}, e a média ariamética é: ${mediaAriametica.toFixed(
          2
        )}`
      );
      break;
    case 2:
      totalNotas = nota1 * peso1 + nota2 * peso2 + nota3 * peso3;
      const totalPesos = peso1 + peso2 + peso3;
      const mediaPonderada = totalNotas / totalPesos;
      console.log(
        `você escolheu a opção ${option}, e a média ponderada é: ${mediaPonderada.toFixed(
          2
        )}`
      );
      break;
    default:
      console.log(
        `Você digitou ${option}, esta opção é inexistente, Digite 1 para aritmética ou 2 para ponderada `
      );
      break;
  }
};

calcularAritmeticaPonderada();
