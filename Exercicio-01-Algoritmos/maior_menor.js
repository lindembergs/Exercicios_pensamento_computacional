// 2. Crie um algoritmo que receba 3 números e informe qual o maior entre eles.

let n1, n2, n3;
const verificaMaiorMenor = () => {
  n1 = Number(window.prompt("Digite o primeiro número"));
  n2 = Number(window.prompt("Digite o segundo número"));
  n3 = Number(window.prompt("Digite o terceiro número"));
  if ((n1 == 0, n2 == 0, n3 == 0)) {
    alert("os 3 números digitados são 0");
  }
  if ((n1 == n2, n1 == n3)) {
    alert("os 3 números digitados são iguais");
  } else {
    do {
      n1 = Number(window.prompt("Digite o primeiro número"));
      n2 = Number(window.prompt("Digite o segundo número"));
      n3 = Number(window.prompt("Digite o terceiro número"));
      if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Por favor, digite 3 números inteiros válidos.");
      }
    } while (isNaN(n1) || isNaN(n2) || isNaN(n3));
    let maior = Math.max(n1, n2, n3);
    let menor = Math.min(n1, n2, n3);
    alert(`O maior número é ${maior} e o menor número é ${menor}`);
  }
};

verificaMaiorMenor();
