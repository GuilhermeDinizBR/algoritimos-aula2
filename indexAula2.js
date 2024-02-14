const listaLivros = require('./arrayAula2');

function mergeSort (arrayAula2) {
    
    if(arrayAula2.length > 1) {
        const meio = Math.floor(arrayAula2.length / 2);
        const parte1 = mergeSort(arrayAula2.slice(0, meio));
        const parte2 = mergeSort(arrayAula2.slice(meio, arrayAula2.length));
        arrayAula2 = ordena(parte1, parte2);
    }

    return arrayAula2;
}

function ordena(parte1, parte2) {
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        let produtoAtualParte1 = parte1[posicaoAtualParte1]
        let produtoAtualParte2 = parte2[posicaoAtualParte2]

        if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
            resultado.push(produtoAtualParte1)
            posicaoAtualParte1++
        } else {
            resultado.push(produtoAtualParte2)
            posicaoAtualParte2++
        }
    }

    return resultado.concat(posicaoAtualParte1 < parte1.length 
        ? parte1.slice(posicaoAtualParte1)
        : parte2.slice(posicaoAtualParte2))
}

console.log(mergeSort(listaLivros));