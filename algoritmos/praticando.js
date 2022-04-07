const precos = [35, 20, 50, 15, 30]

function ProdutoMaisBarato(array, posicaoInicial) {

    let menorPreco = 0

    for (let atual = posicaoInicial; atual < array.length; atual++) {
        if (array[atual] < array[menorPreco]) {
            menorPreco = atual
        }
    }
    return menorPreco;
}


for(let atual = 0; atual < precos.length; atual++) {
    let maisBarato = ProdutoMaisBarato(precos, atual)
    console.log(precos[maisBarato])
}