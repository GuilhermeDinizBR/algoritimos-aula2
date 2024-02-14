const listaLivros = require('./arrayAula2');

function encontraMenores(pivo, arrayAula2) {
    let menores = 0;

    for(let atual = 0; atual < arrayAula2.length; atual++) {
        let produtoAtual = arrayAula2[atual]
        if (produtoAtual.preco < pivo.preco) {
            menores++
        }
    }

   trocaLugar(arrayAula2, arrayAula2.indexOf(pivo), menores)
   return arrayAula2;
}

function trocaLugar(arrayAula2, de, para) {
    const elem1 = arrayAula2[de]
    const elem2 = arrayAula2[para]

    arrayAula2[para] = elem1
    arrayAula2[de] = elem2
}

function divideNoPivo(arrayAula2) {
    let pivo = arrayAula2[Math.floor(arrayAula2.length / 2)];
    encontraMenores(pivo, arrayAula2);
    let valoresMenores = 0;

    for(let analisando = 0; analisando < arrayAula2.length; analisando++) {
        let atual = arrayAula2[analisando];
        if(atual.preco <= pivo.preco && atual !== pivo) {
            trocaLugar(arrayAula2, analisando, valoresMenores)
            valoresMenores++
        }
    }

    return arrayAula2;
}

//console.log(divideNoPivo(listaLivros));
//console.log(encontraMenores(listaLivros[2], listaLivros));

module.exports = trocaLugar;