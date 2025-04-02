const prompt = require("prompt-sync")();

// 8 - Criar um algoritmo que leia 5 números e informe o maior e o menor entre eles.

const falarMaiorMenor = () => {
  let n1, n2, n3, n4, n5;
  n1 = parseInt(prompt("Digite o primeiro número "));
  n2 = parseInt(prompt("Digite o segundo número "));
  n3 = parseInt(prompt("Digite o terceiro número "));
  n4 = parseInt(prompt("Digite o quarto número "));
  n5 = parseInt(prompt("Digite o quinto número "));
  if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
    console.log(
      `O primeiro número digitado foi: ${n1}, o segundo número digitado foi: ${n2}, o terceiro número digitado foi: ${n3}, o quarto número digitado foi: ${n4}, o quinto número digitado foi: ${n5} então o maior número é: ${n1}`
    );
  }
  if (n2 > n1 && n2 > n3 && n2 > n3 && n2 > n4) {
    console.log(
      `O primeiro número digitado foi: ${n1}, o segundo número digitado foi: ${n2}, o terceiro número digitado foi: ${n3}, o quarto número digitado foi: ${n4}, o quinto número digitado foi: ${n5} então o maior número é: ${n2}`
    );
  }
  if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) {
    console.log(
      `O primeiro número digitado foi: ${n1}, o segundo número digitado foi: ${n2}, o terceiro número digitado foi: ${n3}, o quarto número digitado foi: ${n4}, o quinto número digitado foi: ${n5} então o maior número é: ${n3}`
    );
  }
  if (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) {
    console.log(
      `O primeiro número digitado foi: ${n1}, o segundo número digitado foi: ${n2}, o terceiro número digitado foi: ${n3}, o quarto número digitado foi: ${n4}, o quinto número digitado foi: ${n5} então o maior número é: ${n4}`
    );
  }
  if (n5 > n1 && n5 > n2 && n5 > n3 && n5 > n4) {
    console.log(
      `O primeiro número digitado foi: ${n1}, o segundo número digitado foi: ${n2}, o terceiro número digitado foi: ${n3}, o quarto número digitado foi: ${n4}, o quinto número digitado foi: ${n5} então o maior número é: ${n5}`
    );
  } else {
    console.log(
      "Você digitou números repetidos, todos precisam ser diferentes"
    );
  }
};

falarMaiorMenor();
