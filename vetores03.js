let letras = [];
contador = 0;
mensagem = "";


// leitura de uma letra no vetor de letras

for (let i = 0; i < 10; i++) {
    let letra = prompt("Informe uma letra: ");
    letras.push(letra);
}
for (let j = 0; j < letras.length; j++) {
    
  // converte o texto para maiuscula   

let letra = letras[j].toUpperCase();

//
    let temA = (letra == "A"); // true ou false
    let temE = (letra == "E"); // true ou false
    let temI = (letra == "I"); // true ou false
    let temO = (letra == "O"); // true ou false
    let temU = (letra == "U"); // true ou false

    if ((temA  || temE  || temI  || temO  || temU) == false) {
  
    contador+= 1;

    mensagem += letra + "\n";

}

}


alert(mensagem + " \n" + " Teve " + contador + " Consoantes !");

