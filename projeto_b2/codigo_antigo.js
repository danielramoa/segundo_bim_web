function gerarAleatorios() {
    var vetor = [];
    var geracoes = [];

    while (vetor.length < 6) {
        var aleatorio = Math.floor(Math.random() * 60 + 1);
        geracoes.push(aleatorio);

        if (vetor.includes(aleatorio)) {
            continue;
        }
        vetor.push(aleatorio);
    }

    console.log("Gerações:", geracoes);
    console.log("Finais:", vetor);
}
