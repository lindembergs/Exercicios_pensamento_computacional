// 1 - Criar um algoritmo que leia a idade de uma pessoa e informe se ela é criança (0-12),
// adolescente (13-17), adulta (18-59) ou idosa (60+).

const calcularIdade = () => {
  let idade = Number(window.prompt("Informe sua idade"));
  if (idade <= 12) {
    alert(`Você possui ${idade} anos então é uma criança`);
  }
  if (idade > 12 && idade <= 17) {
    alert(`Você possui ${idade} anos então é adolescente`);
  }
  if (idade > 17 && idade <= 59) {
    alert(`Você possui ${idade} anos então é uma pessoa adulta`);
  }
  if (idade > 59) {
    alert(`Você possui ${idade} anos então é uma pessoa idosa`);
  }
};
calcularIdade();
