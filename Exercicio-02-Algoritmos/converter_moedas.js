// 19 - Criar um algoritmo que leia um valor em reais e o converta para dólar, euro e bitcoin, usando taxas de câmbio fixas definidas no código.
const prompt = require("prompt-sync")();
const converterMoedas = () => {
  const cotacoes = {
    dolar: 5.695,
    euro: 6.167,
    bitcoin: 835602,
  };
  let valorReais = parseFloat(prompt("Digite o valor em reais "));
  let valorDolar = valorReais * cotacoes.dolar;
  let valorEuro = valorReais * cotacoes.euro;
  let valorBitcoin = valorReais * cotacoes.bitcoin;

  console.log(`Valor em USD ${valorDolar.toFixed(2)}`);
  console.log(`Valor em euros ${valorEuro.toFixed(2)}`);
  console.log(`Valor em bitcoins ${valorBitcoin.toFixed(2)}`);
};
converterMoedas();
