// 18 - Criar um algoritmo que leia a data de nascimento de uma pessoa (dia, mês e ano) e calcule a idade atual com base no ano atual informado.
const prompt = require("prompt-sync")();
let idadeValida = true;

const verificaIdade = () => {
  let dia = parseInt(prompt("Digite o dia de nascimento: "));
  let mes = parseInt(prompt("Digite o mês de nascimento: "));
  let anoNascimento = parseInt(prompt("Digite o ano de nascimento: "));

  let dataAtual = new Date();
  let anoAtual = dataAtual.getFullYear();
  let mesAtual = dataAtual.getMonth() + 1;

  let diaAtual = dataAtual.getDate();
  let idade = anoAtual - anoNascimento;
  if (dia > 31 || mes > 12) {
    console.log("Você digitou dia ou mês inexistentes no calendário");
    idadeValida = false;
  }
  if (idadeValida && (mes > mesAtual || dia > diaAtual)) {
    idade--;
    console.log(`Sua idade é: ${idade} anos`);
  }
};
verificaIdade();
