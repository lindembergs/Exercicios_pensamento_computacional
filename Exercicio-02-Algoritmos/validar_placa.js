// 17 - Criar um algoritmo que leia a placa de um veículo e informe se ela é
// válida segundo o formato: 3 letras seguidas de 4 números (ex: ABC1234).
const prompt = require("prompt-sync")();
const validarPlaca = () => {
  let placa = prompt("Digite a placa ").toUpperCase();

  const regexPlaca = /^[A-Z]{3}[0-9]{4}$/;

  if (regexPlaca.test(placa)) {
    console.log("Placa válida");
  } else {
    console.log("Placa inválida");
  }
};

validarPlaca();
