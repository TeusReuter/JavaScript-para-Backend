const cliente = {
    nome: "André",
    idade: 36,
    cpf: "03463000024",
    email: "andre@email.com",
    fones: ["556664411", "666666666"],
    dependentes: [{
        nome: "Carla",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}

cliente.dependentes.push({
    nome: "Helena Jussara",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

// console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="04/01/2014")

console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)