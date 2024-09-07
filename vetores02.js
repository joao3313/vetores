/*Crie um algoritmo que leia 4 notas, mostre as notas e a média na tela.*/

let notas = [];
let soma = 0;
let media = 0;

for (let i = 0; i < 4; i++) {
    let contagem = (i + 1);
    let nota = parseFloat(
        prompt(`Informe a ${contagem}ª Nota do Aluno: `)
    );
    notas.push(nota);
    // Obs: Você pode também fazer: 
    // notas[i] = nota; 
    // isso funciona também
}

//Isso é a quantidade de notas inseridas no vetor.
const quantNotas = notas.length;
let notasMsg = "";
for (let j = 0; j < quantNotas; j++) {
    soma += notas[j];
    //Se o valor de J na repetição é a ultima posição do vetor
    if (j == quantNotas - 1)
        notasMsg += notas[j] + ".";
    else
        notasMsg += notas[j] + ", ";
}

media = soma / quantNotas;

alert(`A notas informadas foram: ${notasMsg} 
       Média dessas notas foi ${media.toFixed(2)} `);








