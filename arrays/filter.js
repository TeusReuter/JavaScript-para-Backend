const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7, 4.5, 8, 7]

const reprovados = nomes.filter(( aluno, indice) =>
notas[indice] < 5)
console.log(`reprovados: ${reprovados}`)

const carros = ['Uno', 'Kwid', 'Mobi']
const precos = [30.000, 32.000, 29.000]
const carroEscolhido = carros.filter((carro, indice) => (
    precos[indice] < 30.000
))

console.log(`O carro que posso comprar é o ${carroEscolhido}`)

const jogos = ['God of War', 'The Witcher', 'Last of Us']
const valores = [200, 150, 210]

const jogoDisponivel = jogos.filter((jogo, indice) => (
valores[indice] < 200))

console.log(jogoDisponivel)

const lanches = ['Xis', 'Fritas', 'Pastel']
const precoLanche = [15, 12, 8]

const lancheEscolhido = lanches.filter((lanche, indice) => (
    precoLanche[indice] < 10
))

console.log(lancheEscolhido)