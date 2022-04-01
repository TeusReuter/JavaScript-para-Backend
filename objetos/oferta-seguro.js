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
        },
        {
            nome: "Helena Jussara",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }
    ],
    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor
    }
}


function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(Object.entries(cliente))
console.log(Object.keys(cliente))
console.log(Object.values(cliente))
oferecerSeguro(cliente)