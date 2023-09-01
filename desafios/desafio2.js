function obterPalavrasDistintas(texto) {

    let palavras = texto.split(" ");


    let palavrasDistintas = {};

    for (let i = 0; i < palavras.length; i++) {
        let palavra = palavras[i];
        palavrasDistintas[palavra] = true;
    }

    let resultado = Object.keys(palavrasDistintas);

    return resultado;
}

//   EXEMPLO
let texto = "doce igual batata doce";
let palavras = obterPalavrasDistintas(texto);
console.log(palavras);
