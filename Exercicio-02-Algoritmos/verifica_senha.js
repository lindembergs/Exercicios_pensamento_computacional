// 11 - Criar um algoritmo que leia a senha digitada por um usuário e verifique se ela é igual a "admin123".
//  Caso contrário, informe que a senha está incorreta e permita 3 tentativas antes de bloquear o acesso.
const prompt = require("prompt-sync")();

const verificaSenha = () => {
  const senhaAtual = "admin123";
  let senhaDigitada;

  for (let tentativas = 0; tentativas < 3; tentativas++) {
    senhaDigitada = prompt("Digite a senha para acessar: ");

    if (senhaDigitada === senhaAtual) {
      console.log("Logado com sucesso!");
      return;
    }

    console.log(`Senha incorreta! Você tem mais ${2 - tentativas} tentativas.`);
  }

  console.log(
    "Você errou 3 vezes e sua conta foi bloqueada. Redefina sua senha."
  );
};

verificaSenha();
