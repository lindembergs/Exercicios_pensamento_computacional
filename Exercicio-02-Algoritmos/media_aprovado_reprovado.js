// 5 - Criar um algoritmo que leia três notas de um aluno, calcule a média e exiba a situação:

// Média < 5 → Reprovado

// Média entre 5 e 6.9 → Recuperação

// Média ≥ 7 → Aprovado

const prompt = require("prompt-sync")();
const aprovarReprovar = () => {
  let nota1, nota2, nota3, totalNotas, media;
  nota1 = parseInt(prompt("Digite a primeira nota "));
  nota2 = parseInt(prompt("Digite a segunda nota "));
  nota3 = parseInt(prompt("Digite a terceira nota "));
  totalNotas = nota1 + nota2 + nota3;
  media = totalNotas / 3;
  console.log(media.toFixed(2));
  if (media < 5) {
    console.log(`Sua média foi: ${media.toFixed(2)}, então você foi reprovado`);
  }
  if (media >= 5 && media < 7) {
    console.log(
      `Sua média foi: ${media.toFixed(2)}, então você foi para a recuperação`
    );
  }
  if (media >= 7) {
    console.log(`Sua média foi: ${media.toFixed(2)}, então você foi aprovado`);
  }
};

aprovarReprovar();
