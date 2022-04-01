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
    },
}

let relatorio = "";

for (let info in cliente) {
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }

}

console.log(relatorio)