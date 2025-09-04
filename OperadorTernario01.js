const prompt = require ('prompt-sync')();

//Exercício par ou impar

let num = Number(prompt('Digite um número: '))
    console.log((num %2 === 0) ? 'Número par!' : 'Número impar!')

//Peça a nota de um aluno e mostre "aprovado" se a nota for maior ou igual a 7, e reprovado caso contrário.

let nota = parseFloat(prompt('Digite a nota da primeira unidade: '))
let nota2 = parseFloat(prompt('Digite a nota da segunda unidade: '))
let media = (nota + nota2) / 2 
    console.log(media >= 7? `O  aluno foi aprovado! Ficou com média ${media}.` : `O aluno ficou em recuperação, com média ${media}.`)

//Verificação de login

let usuario = prompt('Digite seu nome de usuario: ').toLowerCase() === 'admin'
let senha = parseInt(prompt('Digite sua senha: '))

    console.log(usuario == true && senha == 1234 
        ?'Login com sucesso!'
        :'Login inválido, tente novamente.')
