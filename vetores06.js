/*Refatore o Exercício 10 da calculadora simples e 
faça uma exercicio10_v2.js onde terá uma função para 
cada item do menu e o caso do denominador não ser zero.

Soma		    somar(num1 , num2)
Subtração		subtrair(num1 , num2)
Multiplicação	multiplicar(num1 , num2)
Divisão		    dividir(num, den) e verificarDenominador(num2)
Potenciação		calcularPotencia(base, expoente)
Radiciação		calcularRaiz(numero, raiz)*/

function menuPrincipal() {
    let infoMenu =
        `Escolha uma uma operação a fazer:
            1-Adição
            2-Subtração
            3-Multiplicação
            4-Divisão
            5-Potenciação
            6-Radiciação
            7-Sair`;
    let opcao = prompt(infoMenu);
    return opcao;
}

function lerNumero() {
    let numeros = [];
    numeros.push(parseFloat(prompt("Informe o 1º numero:")));
    numeros.push(parseFloat(prompt("Informe o 2º numero:")));
    return numeros;
}

function adicao() {
    let num = lerNumero();
    let resultado = num[0] + num[1];
    alert(`${num[0]} + ${num[1]} = ${resultado}`);
}

function subtracao() {
    let num = lerNumero();
    let resultado = num[0] - num[1];
    alert(`${num[0]} - ${num[1]} = ${resultado}`);
}

function multiplicacao() {
    let num = lerNumero();
    let resultado = num[0] * num[1];
    alert(`${num[0]} X ${num[1]} = ${resultado}`);
}

function potenciacao() {
    let num = lerNumero();
    let resultado = num[0] ** num[1];
    alert(`${num[0]} exp ${num[1]} = ${resultado}`);
}

function radiciacao() {
    let num = lerNumero();
    let resultado = num[0] ** (1 / num[1]);
    alert(`A raiz de ${num[0]} = ${resultado}`);
}

function denominadorEhZero(num2) {
    return (num2 == 0);
}

function divisao() {

    let num = lerNumero();
    let repetir = denominadorEhZero(num[1]);

    while (repetir) {
        alert("Denominador é Invalido");
        num = lerNumero();
        repetir = denominadorEhZero(num[1]);
    }

    let resultado = num[0] / num[1];
    alert(`${num[0]} / ${num[1]} = ${resultado}`);

}

function sair() {
    return true;
}

let saindo = false;

do {
    let option = menuPrincipal();
    switch (option) {
        case "1":
            adicao();
            break;
        case "2":
            subtracao();
            break;
        case "3":
            multiplicacao();
            break;
        case "4":
            divisao();
            break;
        case "5":
            potenciacao();
            break;
        case "6":
            radiciacao();
            break;
        case "7":
            saindo = sair();
            break;
        default:
            alert("Opção Inválida");
            break;
    }

} while (!saindo);

alert("Obrigado por usar a calculadora!");