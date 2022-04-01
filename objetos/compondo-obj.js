const cliente = {
    nome: "André",
    idade: 36,
    cpf: "03463000024",
    email: "andre@email.com",
    fones: ["556664411", "666666666"]
}

cliente.dependentes = {
    nome: "Carla",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Carla Silva"

console.log(cliente)