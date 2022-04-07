const precos = [50, 25, 40, 10, 35, 5];

let menorValor = 0

for (let atual = 0; atual < precos.length; atual++) {
    // se o atual for menor que o "menorValor", menorValor vai guardar esse valor   
    if (precos[atual] < precos[menorValor]) {
        menorValor = atual
    }
}

console.log(`o menor valor nesse array é ${precos[menorValor]}`)

let maiorValor = 0

for (let atual = 0; atual < precos.length; atual++) {
    if (precos[atual] > precos[maiorValor]) {
        maiorValor = atual
    }
}

console.log(`o maior valor nesse array é ${precos[maiorValor]}`)