/*let num = [];
// leitura dos numeros nos espaços
num[0] = prompt("Informe o 1º Numero");
num[1] = prompt("Informe o 2º Numero");
num[2] = prompt("Informe o 3º Numero");
num[3] = prompt("Informe o 4º Numero");
num[4] = prompt("Informe o 5º Numero");

let mensagem =
    `${num[0]}, ${num[1]}, ${num[2]}, ${num[3]} e ${num[4]} `;

let mensagem2 =
    num[0] + ", " + num[1] + ", " +
    num[2] + ", " + num[3] + " e " + num[4];

alert(mensagem);*/

//alert(mensagem2);

 //Outro modelo abaixo 

let num = [];
let mensagem = "";
let numerostr = "";
// leitura dos numeros nos espaços
for (let i = 0; i < 5; i += 1) {
    numerostr = prompt("Informe um número:");
    num.push(numerostr);
}

for (let i = 0; i < num.length; i++) {

    // O total de Elementos - 1 equivale a ultima posição do vetor.
    // Ex: 5 valores no vetor, vai de 0 a 4 posições [0,1,2,3,4]. 
    // O objetivo é inserir o ponto final no ultimo valor no texto.
    let ultimaPosicao = (num.length - 1); 
    
    if(i == ultimaPosicao)
        mensagem += num[i] + ".";
    else
        mensagem += num[i] + ", ";    
}
alert(mensagem);
