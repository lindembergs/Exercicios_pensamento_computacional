const prompt = require("prompt-sync")();

const verificaMaiorMenor = () => {
  let n1, n2, n3;

  do {
    n1 = Number(prompt("Digite o primeiro número: "));
    n2 = Number(prompt("Digite o segundo número: "));
    n3 = Number(prompt("Digite o terceiro número: "));

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      console.log("Por favor, digite 3 números válidos.");
    }
  } while (isNaN(n1) || isNaN(n2) || isNaN(n3));

  if (n1 === 0 && n2 === 0 && n3 === 0) {
    console.log("Os 3 números digitados são 0.");
    return;
  }

  if (n1 === n2 && n1 === n3) {
    console.log("Os 3 números digitados são iguais.");
    return;
  }

  let maior = Math.max(n1, n2, n3);
  let menor = Math.min(n1, n2, n3);
  console.log(`O maior número é ${maior} e o menor número é ${menor}`);
};

verificaMaiorMenor();
