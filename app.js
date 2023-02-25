// exercicio 2
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

//exercicio 3 
const faturamentoDiario = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },
    { "dia": 12, "valor": 0.0 },
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },
    { "dia": 19, "valor": 0.0 },
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },
    { "dia": 26, "valor": 0.0 },
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
];

let somaFaturamento = 0;
let diasComFaturamentoAcimaDaMedia = 0;
let maiorFaturamentoDiario = faturamentoDiario[0].valor;
let menorFaturamentoDiario = faturamentoDiario[0].valor;

// Itera pelos valores de faturamento diário para calcular as informações desejadas
for (let i = 0; i < faturamentoDiario.length; i++) {
    const faturamento = faturamentoDiario[i].valor;

    if (faturamento > maiorFaturamentoDiario) {
        maiorFaturamentoDiario = faturamento;
    }

    if (faturamento < menorFaturamentoDiario) {
        menorFaturamentoDiario = faturamento;
    }

   // Apenas considera os dias com faturamento para o cálculo da média
if (faturamento > 0) {
    somaFaturamento += faturamento;
    diasComFaturamento++;
}

// Verifica se o faturamento atual é o maior ou o menor valor já encontrado
if (faturamento > maiorFaturamento) {
    maiorFaturamento = faturamento;
}
if (faturamento < menorFaturamento || menorFaturamento === null) {
    menorFaturamento = faturamento;
}
});

const mediaFaturamento = somaFaturamento / diasComFaturamento;

console.log(`O menor valor de faturamento ocorrido em um dia do mês foi: R$${menorFaturamento.toFixed(2)}`);
console.log(`O maior valor de faturamento ocorrido em um dia do mês foi: R$${maiorFaturamento.toFixed(2)}`);

let diasAcimaMedia = 0;
faturamentoMensal.forEach(({ valor }) => {
if (valor > mediaFaturamento) {
    diasAcimaMedia++;
}
});

console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${diasAcimaMedia}`);

//###################################################################################################################################
//exercicio 4 

let faturamentoSP = 67836.43;
let faturamentoRJ = 36678.66;
let faturamentoMG = 29229.88;
let faturamentoES = 27165.48;
let faturamentoOutros = 19849.53;

let faturamentoTotal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;

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
//exercicio 5

let stringOriginal = "exemplo de string para ser invertida";
let stringInvertida = "";

for (let i = stringOriginal.length - 1; i >= 0; i--) {
  stringInvertida += stringOriginal[i];
}

console.log(stringInvertida);
