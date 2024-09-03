let nota = [];
let mensagem = "";
let calculo = 0;
// leitura dos numeros nos espaços
for (let i = 0; i < 4; i += 1)
  
  
  {
  nota[i] = prompt("Informe uma nota:");

  calculo += parseInt(nota[i]);
}


for( let j=0;j<4;j+=1)
  
  {

  mensagem += nota[j]+ "\n";

 }

 let media = calculo/4;
alert (mensagem + "Média é " + media);
 









