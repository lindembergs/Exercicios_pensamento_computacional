// 7. Crie um algoritmo que recebe 2 números e multiplica o num1 pelo num2 através de
// somas repetidas. (ex: 2 e 3 = 2 + 2 + 2)
const prompt = require("prompt-sync")();
const calcularComSomaRepetida = () => {
  let n1, n2, resultado;
  resultado = 0;
  n1 = Number(prompt("Digite o primeiro número "));
  n2 = Number(prompt("Digite o segundo número "));
  for (let i = 0; i <= n2; i++) {
    resultado += n1;
  }
  console.log(resultado);
};

calcularComSomaRepetida();
