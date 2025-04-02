// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e
// mostre-a expressa em dias. Leve em consideração o ano com 365 dias e o mês com 30.
// (Ex: 3 anos, 2 meses e 15 dias = 1170 dias.)
let idadeEmAnos, idadeEmMeses, idadeEmDias;
const converterIdadeEmDias = () => {
  do {
    idadeEmAnos = Number(window.prompt("Digite sua idade em anos"));
    idadeEmMeses = Number(window.prompt("Digite sua idade em meses"));
    idadeEmDias = Number(window.prompt("Digite sua idade em dias"));
    if ((idadeEmAnos == 0, idadeEmMeses == 0, idadeEmDias == 0)) {
      alert("Você ainda não nasceu?");
    }
    if (isNaN(idadeEmAnos) || isNaN(idadeEmMeses) || isNaN(idadeEmDias)) {
      alert("Por favor, digite apenas números válidos");
    }
  } while (isNaN(idadeEmAnos) || isNaN(idadeEmMeses) || isNaN(idadeEmDias));
  let idadeAnosEmDias = idadeEmAnos * 365;
  let idadeMesesEmDias = idadeEmMeses * 30;
  let totalIdadeEmDias = idadeAnosEmDias + idadeMesesEmDias + idadeEmDias;
  alert(`Sua idade total é ${totalIdadeEmDias}`);
};

converterIdadeEmDias();
