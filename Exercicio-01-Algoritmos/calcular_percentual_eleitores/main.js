// 8. Escreva um algoritmo para ler o número total de eleitores de um município, o número
// de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um
// representa em relação ao total de eleitores.

const calcularPercentagemDeVotos = () => {
  let quantidadeDeVotosBrancos,
    quantidadeDeVotosNulos,
    quantidadeDeVotosValidos,
    totalDeVotos,
    percentualBrancos,
    percentualNulos,
    percentualValidos;
  quantidadeDeVotosBrancos = Number(
    window.prompt("Digite a quantidade de votos brancos")
  );
  quantidadeDeVotosNulos = Number(
    window.prompt("Digite a quantidade de votos Nulos")
  );
  quantidadeDeVotosValidos = Number(
    window.prompt("Digite a quantidade de votos Válidos")
  );
  totalDeVotos =
    quantidadeDeVotosBrancos +
    quantidadeDeVotosNulos +
    quantidadeDeVotosValidos;
  console.log(totalDeVotos);

  percentualBrancos = (quantidadeDeVotosBrancos / totalDeVotos) * 100;
  percentualNulos = (quantidadeDeVotosNulos / totalDeVotos) * 100;
  percentualValidos = (quantidadeDeVotosValidos / totalDeVotos) * 100;

  alert(`Brancos: ${percentualBrancos.toFixed(2)}%`);
  alert(`Nulos: ${percentualNulos.toFixed(2)}%`);
  alert(`Válidos: ${percentualValidos.toFixed(2)}%`);
};

calcularPercentagemDeVotos();
