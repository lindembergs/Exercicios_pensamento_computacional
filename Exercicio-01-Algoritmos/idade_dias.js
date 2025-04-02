// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e
// mostre-a expressa em dias. Leve em consideração o ano com 365 dias e o mês com 30.
// (Ex: 3 anos, 2 meses e 15 dias = 1170 dias.)
const prompt = require("prompt-sync")();
let idadeEmAnos, idadeEmMeses, idadeEmDias;
const converterIdadeEmDias = () => {
  do {
    idadeEmAnos = Number(prompt("Digite sua idade em anos "));
    idadeEmMeses = Number(prompt("Digite sua idade em meses "));
    idadeEmDias = Number(prompt("Digite sua idade em dias "));
    if ((idadeEmAnos == 0, idadeEmMeses == 0, idadeEmDias == 0)) {
      console.log("Você ainda não nasceu?");
    }
    if (isNaN(idadeEmAnos) || isNaN(idadeEmMeses) || isNaN(idadeEmDias)) {
      console.log("Por favor, digite apenas números válidos");
    }
  } while (isNaN(idadeEmAnos) || isNaN(idadeEmMeses) || isNaN(idadeEmDias));
  let idadeAnosEmDias = idadeEmAnos * 365;
  let idadeMesesEmDias = idadeEmMeses * 30;
  let totalIdadeEmDias = idadeAnosEmDias + idadeMesesEmDias + idadeEmDias;
  console.log(`Sua idade total é ${totalIdadeEmDias}`);
};

converterIdadeEmDias();
