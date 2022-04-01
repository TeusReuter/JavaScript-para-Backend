const alunos = ['João', 'Ju', 'Caio', 'Ana'];
const medias = [10, 7, 9, 6];

const listaNotasAlunos = [alunos, medias]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaNotasAlunos[0].includes(nomeDoAluno)) {
        let indice = listaNotasAlunos[0].indexOf(nomeDoAluno)
        return listaNotasAlunos[0][indice] + ' sua média é ' + listaNotasAlunos[1][indice]
    } else {
        return 'Aluno não cadastrado';
    }
}

console.log(exibeNomeNota('Ju'))