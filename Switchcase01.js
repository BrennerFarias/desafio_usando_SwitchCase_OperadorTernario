const prompt = require ('prompt-sync')();

//Cardápio de restaurante

let cardapio = parseInt(prompt('Digite qual opção de menu você deseja:\n1. Pizza\n2. Hambúrguer\n3. sushi\n0. Sair'))

switch(cardapio) {
    case 1:
        console.log('Seguem nossas promos de pizza!')
    break;
    case 2:
        console.log('Seguem nossas promos de burgueres!')
    break;
    case 3:
        console.log('Seguem nossas promos de sushi!')
    break;
    case 0:
        console.log('Saiu do menu!')
    break;
    return;
        console.log('Digite uma operação válida!')
}


//Calculadora básica usando soma, subtração, divisão, multiplicação

let num1 = parseFloat(prompt('Digite o primeiro número: '))
let num2 = parseFloat(prompt('Digite o segundo número: '))
let operacao = prompt('Qual operador aritmético você deseja seguir no processo? (+ , - , * , / ,')

switch(operacao) {
    case '+':
        console.log(`A soma de ${num1} + ${num2} é de: ${num1 + num2}`)
    break;
    case '-':
        console.log(`A subtração de ${num1} - ${num2} é de: ${num1 - num2}`)
    break;
    case '*':
        console.log(`A multiplicação de ${num1} x ${num2} é de: ${num1 * num2}`)
    break;
    case '/':
        console.log(`A divisão de ${num1} / ${num2} é de: ${num1 / num2}`)
    default:
        console.log('Digite um número/operador válido!')

}

//Conversor de moedas 

let valor = parseFloat(prompt('Digite quanto você quer converter: '))
let moedas = parseInt(prompt('Escolha a moeda de conversão:\n1. Dólar\n2. Euro\n3. Libra'))

switch(moedas) {
    case 1:
        console.log(`O valor em Dólar é de: ${valor /5.46}`)
    break;
    case 2:
        console.log(`O valor em Euros é de: ${valor /6.36}`)
    break;
    case 3:
        console.log(`O valor em Libras é de: ${valor /7.77}`)
    default:
        console.log('Digite um valor válido!')
}