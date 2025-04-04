// 14- Criar um algoritmo que leia uma frase e exiba o total de vogais presentes nela.
const prompt = require("prompt-sync")();

const exibirTotalDeVogais = () => {
  const vogais = ["a", "e", "i", "o", "u"];
  let palavra, palavraSplit;
  palavra = prompt("Digite uma palavra ").toLocaleLowerCase();
  palavraSplit = palavra.split("");
  // console.log(palavraSplit);
  let quantidadeVogais = palavraSplit.filter((letra) => vogais.includes(letra));
  console.log("Vogais encontradas:", quantidadeVogais);
  console.log(
    `A quantidade de vogais na palavra ${palavra} é: ${quantidadeVogais.length}`
  );
};

exibirTotalDeVogais();
