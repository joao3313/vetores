//  Crie um algoritmo que leia um vetor de 5 números inteiros mostre-os

//let numerosvetores = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


let numerosvetores = [];
let mensagem = "";

for (let i = 0;i < 5; i+= 1){
    
    numerosvetores.push (prompt("Informe número inteiro"));
}
    for (let i = 0; i < numerosvetores.length; i ++) 
        {
    mensagem += numerosvetores[i] + ",";
  
    }
    alert(mensagem);












// codigo abaixo é uma versão mais facil 

/*numerosvetores [0] = prompt ("Informe o 1 número");
numerosvetores [1] = prompt ("Informe o 2 número");
numerosvetores [2] = prompt ("Informe o 3 número");
numerosvetores [3] = prompt ("Informe o 4 número");
numerosvetores [4] = prompt ("Informe o 5 número");

let mensagem =

`${numerosvetores[0]}, ${numerosvetores [1]}, ${numerosvetores[2]}, ${numerosvetores[3]}, ${numerosvetores[4]}`;

alert(mensagem);*/

