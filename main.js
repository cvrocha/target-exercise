// Exercício 1
function calcularSoma() {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    document.getElementById('resultado1').textContent = SOMA;
}

// Exercício 2
function verificarFibonacci() {
    const numero = parseInt(document.getElementById('numeroFibonacci').value);
    let a = 0;
    let b = 1;
    let fibonacci = [a, b];

    while (b <= numero) {
        const temp = b;
        b = a + b;
        a = temp;
        fibonacci.push(b);
    }

    const pertence = fibonacci.includes(numero);
    const resultado = document.getElementById('resultado2');
    resultado.textContent = pertence 
        ? `${numero} pertence à sequência de Fibonacci!` 
        : `${numero} não pertence à sequência de Fibonacci.`;
    resultado.className = `mt-4 text-lg ${pertence ? 'text-green-600' : 'text-red-600'}`;
}

// Exercício 3
const dadosFaturamento = [
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

function analisarFaturamento() {
    const valoresComFaturamento = dadosFaturamento.filter(dia => dia.valor > 0);
    const valores = valoresComFaturamento.map(dia => dia.valor);

    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);
    const media = valores.reduce((acc, curr) => acc + curr, 0) / valores.length;
    const diasAcimaDaMedia = valores.filter(valor => valor > media).length;

    document.getElementById('menorFaturamento').textContent = 
        `Menor faturamento: R$ ${menorValor.toFixed(2)}`;
    document.getElementById('maiorFaturamento').textContent = 
        `Maior faturamento: R$ ${maiorValor.toFixed(2)}`;
    document.getElementById('diasAcimaDaMedia').textContent = 
        `Dias acima da média: ${diasAcimaDaMedia}`;
}

// Exercício 4
function calcularPercentuais() {
    const faturamento = {
        'SP': 67836.43,
        'RJ': 36678.66,
        'MG': 29229.88,
        'ES': 27165.48,
        'Outros': 19849.53
    };

    const total = Object.values(faturamento).reduce((acc, curr) => acc + curr, 0);
    const resultado = document.getElementById('resultado4');
    resultado.innerHTML = '';

    Object.entries(faturamento).forEach(([estado, valor]) => {
        const percentual = (valor / total * 100).toFixed(2);
        const div = document.createElement('div');
        div.className = 'flex justify-between items-center';
        div.innerHTML = `
            <span class="font-semibold">${estado}:</span>
            <span>${percentual}%</span>
        `;
        resultado.appendChild(div);
    });
}

// Exercício 5
function inverterString() {
    const texto = document.getElementById('textoParaInverter').value;
    let textoInvertido = '';
    
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }
    
    document.getElementById('resultado5').textContent = textoInvertido;
}

// Inicializar todos os cálculos
window.onload = function() {
    calcularSoma();
    analisarFaturamento();
    calcularPercentuais();
};