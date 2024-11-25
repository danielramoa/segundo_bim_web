function gerarAleatoriosOtimizado(qtd) {
    // Gerar todos os números de 1 a 60
    const numeros = Array.from({ length: 60 }, (_, i) => i + 1);

    // Embaralhar os números
    for (let i = numeros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
    }

    // Retornar os primeiros 'qtd' números
    return numeros.slice(0, qtd);
}

// Testar o algoritmo otimizado
console.time("Algoritmo Otimizado");
const resultado = gerarAleatoriosOtimizado(50);
console.timeEnd("Algoritmo Otimizado");

console.log("Finais:", resultado);
