function extrairCores() {
    // Seleciona todos os elementos <a> que possuem o atributo href com "color_tryit.asp"
    const elementos = document.querySelectorAll('a[href*="color_tryit.asp"]');

    // Filtra apenas os elementos cujo texto não seja um valor hexadecimal
    const vetorCores = Array.from(elementos)
        .map(link => link.textContent.trim()) // Extrai o texto do link
        .filter(texto => !texto.startsWith("#")) // Remove os links que começam com "#"
        .map(nome => nome.toLowerCase()); // Converte o nome da cor para minúsculas

    console.log(vetorCores); // Exibe o vetor de cores no console
    return vetorCores;
}

// Executa a função ao carregar o script na página
extrairCores();

// Função para selecionar 10 cores aleatórias do vetor
function selecionarCoresAleatorias(vetorCores, quantidade = 10) {
    if (quantidade > vetorCores.length) {
        console.error("Quantidade solicitada maior que o número total de cores disponíveis.");
        return [];
    }

    const coresSelecionadas = [];

    while (coresSelecionadas.length < quantidade) {
        // Gera um índice aleatório dentro do intervalo do vetor de cores
        const indiceAleatorio = Math.floor(Math.random() * vetorCores.length);
        const corEscolhida = vetorCores[indiceAleatorio];

        // Adiciona a cor ao vetor somente se ainda não foi escolhida
        if (!coresSelecionadas.includes(corEscolhida)) {
            coresSelecionadas.push(corEscolhida);
        }
    }

    console.log("Cores aleatórias escolhidas:", coresSelecionadas); // Exibe as 10 cores selecionadas
    return coresSelecionadas;
}

// Função para escolher uma cor aleatória entre as 10 selecionadas
function escolherUmaCor(coresAleatorias) {
    if (coresAleatorias.length === 0) {
        console.error("Nenhuma cor disponível para selecionar.");
        return;
    }

    // Escolhe um índice aleatório dentro do vetor de 10 cores
    const indiceAleatorio = Math.floor(Math.random() * coresAleatorias.length);
    const corEscolhida = coresAleatorias[indiceAleatorio];

    console.log("Cor escolhida aleatoriamente:", corEscolhida); // Exibe a cor escolhida no console
    return corEscolhida;
}

// Exemplo de uso:
const vetorCores = extrairCores(); // Assume que esta função já extraiu as cores da página
const coresAleatorias = selecionarCoresAleatorias(vetorCores); // Seleciona 10 cores aleatórias
escolherUmaCor(coresAleatorias); // Escolhe uma entre as 10 selecionadas
