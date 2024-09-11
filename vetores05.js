/*Crie um algoritmo que leia 20 números inteiros e armazene-os num vetor. 
Armazene os números pares no vetor PAR e os números IMPARES no vetor impar. 
Deve-se no final mostrar os três vetores.*/

let listaNumeros = [];
let listaPares = [];
let listaImpares = [];

//Leitura de Numeros e Inserindo no Lista de Números
for (let i = 0; i < 10; i++) {
    let numeroString = prompt("Informe um Número:");
    let numero = parseInt(numeroString);
    listaNumeros.push(numero);
}

//Processar os pares e impares
for (let j = 0; j < listaNumeros.length; j++) {
    //Pega o valor corrente do vetor de números
    let numeroAgora = listaNumeros[j];
    //Verifica se ePar == true ou false
    let ehPar = ((numeroAgora % 2) == 0);

    if (ehPar) {
        listaPares.push(numeroAgora);
    } else {
        listaImpares.push(numeroAgora);
    }
}

//Mostrar todos os numeros da lista Principal
let mensagemNumeros = "";
for (let k = 0; k < listaNumeros.length; k++) {
    let ultimaPosicao = (listaNumeros.length - 1);
    if (k == ultimaPosicao) {
        mensagemNumeros += listaNumeros[k] + ".";
    }
    else {
        mensagemNumeros += listaNumeros[k] + ", ";
    }
}

//Mostrar todos os numeros da lista de Pares
let mensagemPares = "";
for (let k = 0; k < listaPares.length; k++) {
    let ultimaPosicao = (listaPares.length - 1);
    if (k == ultimaPosicao) {
        mensagemPares += listaPares[k] + ".";
    }
    else {
        mensagemPares += listaPares[k] + ", ";
    }
}

//Mostrar todos os numeros da lista de Impares
let mensagemImpares = "";
for (let k = 0; k < listaImpares.length; k++) {
    let ultimaPosicao = (listaImpares.length - 1);
    if (k == ultimaPosicao) {
        mensagemImpares += listaImpares[k] + ".";
    }
    else {
        mensagemImpares += listaImpares[k] + ", ";
    }
}

alert(`Os Números inseridos: ${mensagemNumeros} 
       Os Números pares: ${mensagemPares} 
       Os Números impares: ${mensagemImpares}`);