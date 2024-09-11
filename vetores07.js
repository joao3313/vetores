function calcularAreaRetangulo(base, altura) {
    return base * altura;
}

let baseRetangulo = parseFloat(prompt("Informe a Base do Retângulo:"));
let alturaRetangulo = parseFloat(prompt("Informe a Altura do Retângulo:"));
let resultado = calcularAreaRetangulo(baseRetangulo, alturaRetangulo);

alert("A área do Retângulo é: " + resultado.toFixed(2));