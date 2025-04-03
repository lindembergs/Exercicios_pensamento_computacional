const prompt = require("prompt-sync")();

const falarMaiorMenor = () => {
  let idade1, idade2, idade3, idade4, idade5, nome1, nome2, nome3, nome4, nome5;
  nome1 = prompt("Digite o nome da primeira pessoa: ");
  idade1 = parseInt(prompt("Digite a primeira idade: "));
  nome2 = prompt("Digite o nome da segunda pessoa: ");
  idade2 = parseInt(prompt("Digite a segunda idade: "));
  nome3 = prompt("Digite o nome da terceira pessoa: ");
  idade3 = parseInt(prompt("Digite a terceira idade: "));
  nome4 = prompt("Digite o nome da quarta pessoa: ");
  idade4 = parseInt(prompt("Digite a quarta idade: "));
  nome5 = prompt("Digite o nome da quinta pessoa: ");
  idade5 = parseInt(prompt("Digite a quinta idade: "));

  let nomeMaisVelho = nome1;
  let idadeMaisVelho = idade1;

  if (idade2 > idadeMaisVelho) {
    nomeMaisVelho = nome2;
    idadeMaisVelho = idade2;
  }
  if (idade3 > idadeMaisVelho) {
    nomeMaisVelho = nome3;
    idadeMaisVelho = idade3;
  }
  if (idade4 > idadeMaisVelho) {
    nomeMaisVelho = nome4;
    idadeMaisVelho = idade4;
  }
  if (idade5 > idadeMaisVelho) {
    nomeMaisVelho = nome5;
    idadeMaisVelho = idade5;
  }

  console.log(
    `A pessoa mais velha é ${nomeMaisVelho}, com ${idadeMaisVelho} anos.`
  );
};

falarMaiorMenor();
