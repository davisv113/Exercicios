// exercicio 2  Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

//IMPORTANTE:
//Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
// Definindo o número que se deseja verificar se pertence à sequência
const numeroVerificar = 34;

// Definindo as duas primeiras posições da sequência
let fiboAnterior = 0;
let fiboAtual = 1;

// Variável para verificar se o número informado pertence ou não à sequência
let pertence = false;

// Loop para calcular a sequência até encontrar um valor maior ou igual ao número informado
while (fiboAtual <= numeroVerificar) {
  if (fiboAtual === numeroVerificar) {
    pertence = true;
    break;
  }

  const fiboProximo = fiboAnterior + fiboAtual;
  fiboAnterior = fiboAtual;
  fiboAtual = fiboProximo;
}

// Verificando se o número informado pertence ou não à sequência e retornando a mensagem correspondente
if (pertence) {
  console.log(`${numeroVerificar} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numeroVerificar} não pertence à sequência de Fibonacci.`);
}

//############################################################################################################

//exercicio 3  Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const faturamentoDiario = [
  { dia: 1, valor: 22174.1664 },
  { dia: 2, valor: 24537.6698 },
  { dia: 3, valor: 26139.6134 },
  { dia: 4, valor: 0.0 },
  { dia: 5, valor: 0.0 },
  { dia: 6, valor: 26742.6612 },
  { dia: 7, valor: 0.0 },
  { dia: 8, valor: 42889.2258 },
  { dia: 9, valor: 46251.174 },
  { dia: 10, valor: 11191.4722 },
  { dia: 11, valor: 0.0 },
  { dia: 12, valor: 0.0 },
  { dia: 13, valor: 3847.4823 },
  { dia: 14, valor: 373.7838 },
  { dia: 15, valor: 2659.7563 },
  { dia: 16, valor: 48924.2448 },
  { dia: 17, valor: 18419.2614 },
  { dia: 18, valor: 0.0 },
  { dia: 19, valor: 0.0 },
  { dia: 20, valor: 35240.1826 },
  { dia: 21, valor: 43829.1667 },
  { dia: 22, valor: 18235.6852 },
  { dia: 23, valor: 4355.0662 },
  { dia: 24, valor: 13327.1025 },
  { dia: 25, valor: 0.0 },
  { dia: 26, valor: 0.0 },
  { dia: 27, valor: 25681.8318 },
  { dia: 28, valor: 1718.1221 },
  { dia: 29, valor: 13220.495 },
  { dia: 30, valor: 8414.61 },
];


let menorFaturamento = Infinity;
let maiorFaturamento = 0;
let totalFaturamento = 0;
let diasAcimaMedia = 0;

// Encontra o menor e o maior faturamento
faturamentoDiario.forEach((dia) => {
  if (dia.valor < menorFaturamento) {
    menorFaturamento = dia.valor;
  }
  if (dia.valor > maiorFaturamento) {
    maiorFaturamento = dia.valor;
  }
  totalFaturamento += dia.valor;
});

// Calcula a média de faturamento diário
const diasFaturamento = faturamentoDiario.filter((dia) => dia.valor > 0);
const faturamentoMensal = totalFaturamento / diasFaturamento.length;

// Encontra o número de dias com faturamento acima da média mensal
diasAcimaMedia = diasFaturamento.filter((dia) => dia.valor > faturamentoMensal).length;

console.log("Menor faturamento diário:", menorFaturamento.toFixed(2));
console.log("Maior faturamento diário:", maiorFaturamento.toFixed(2));
console.log("Número de dias com faturamento acima da média mensal:", diasAcimaMedia);

//###################################################################################################################################
//exercicio 4 Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

let faturamentoSP = 67836.43;
let faturamentoRJ = 36678.66;
let faturamentoMG = 29229.88;
let faturamentoES = 27165.48;
let faturamentoOutros = 19849.53;

let faturamentoTotal =
  faturamentoSP +
  faturamentoRJ +
  faturamentoMG +
  faturamentoES +
  faturamentoOutros;

let percentualSP = (faturamentoSP / faturamentoTotal) * 100;
let percentualRJ = (faturamentoRJ / faturamentoTotal) * 100;
let percentualMG = (faturamentoMG / faturamentoTotal) * 100;
let percentualES = (faturamentoES / faturamentoTotal) * 100;
let percentualOutros = (faturamentoOutros / faturamentoTotal) * 100;

console.log("Percentual de representação de cada estado:");
console.log("SP: " + percentualSP.toFixed(2) + "%");
console.log("RJ: " + percentualRJ.toFixed(2) + "%");
console.log("MG: " + percentualMG.toFixed(2) + "%");
console.log("ES: " + percentualES.toFixed(2) + "%");
console.log("Outros: " + percentualOutros.toFixed(2) + "%");

//###################################################################################################################################
//exercicio 5 Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

let stringOriginal = "Socorram-me, subi no ônibus em Marrocos!";
let stringInvertida = "";

for (let i = stringOriginal.length - 1; i >= 0; i--) {
  stringInvertida += stringOriginal[i];
}

console.log(stringInvertida);
