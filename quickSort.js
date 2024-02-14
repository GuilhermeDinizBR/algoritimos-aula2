const listaLivros = require('./arrayAula2');
const trocaLugar = require('./encontraMenores');

function quickSort(arrayAula2, esquerda, direita) {

    if (arrayAula2.length > 1) {
        let indiceAtual = particiona(arrayAula2, esquerda, direita);
        if (esquerda < indiceAtual - 1) {
            quickSort(arrayAula2, esquerda, indiceAtual - 1);
        }
        if (indiceAtual < direita) {
            quickSort(arrayAula2, indiceAtual, direita);
        }
    }
    return arrayAula2;
}

function particiona(arrayAula2, esquerda, direita) {
    console.log('array', arrayAula2)
    console.log('esquerda, direita', esquerda, direita)
    let pivo = arrayAula2[Math.floor(esquerda + direita) / 2]
    let atualEsquerda = esquerda; 
    let atualDireita = direita;
    while (atualEsquerda <= atualDireita) {
        while (arrayAula2[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++
        }
        while (arrayAula2[atualDireita].preco > pivo.preco) {
            atualDireita--
    }
        if (atualEsquerda <= atualDireita) {
            trocaLugar(arrayAula2, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));