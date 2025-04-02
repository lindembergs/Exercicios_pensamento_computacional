// 1 - Criar um algoritmo que leia a idade de uma pessoa e informe se ela é criança (0-12),
// adolescente (13-17), adulta (18-59) ou idosa (60+).
const prompt = require("prompt-sync")();
const calcularIdade = () => {
  let idade = Number(prompt("Informe sua idade "));
  if (idade <= 12) {
    console.log(`Você possui ${idade} anos então é uma criança`);
  }
  if (idade > 12 && idade <= 17) {
    console.log(`Você possui ${idade} anos então é adolescente`);
  }
  if (idade > 17 && idade <= 59) {
    console.log(`Você possui ${idade} anos então é uma pessoa adulta`);
  }
  if (idade > 59) {
    console.log(`Você possui ${idade} anos então é uma pessoa idosa`);
  }
};
calcularIdade();
