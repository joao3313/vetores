let ListaSalarios = [];

for (let i = 0; i < 5; i++) {

    // Leitura de salario em String
    let salarioString = prompt(" Informe o Salario: ");

    //Conversão do salário de string para float ( números decimal)
    let salario = parseFloat(salarioString);
    //Insere na lista (vetor)
    ListaSalarios.push(salario);
}

    let mensagem = "Salarios Líquidos: \n";

    for (let j = 0; j < ListaSalarios.length; j++) {
        //Formula 01
        //let salLiquido = ListaSalarios[j] - (ListaSalarios[j] * 0, 12);
        // Formula 02
        let salLiquido = ListaSalarios[j] - (ListaSalarios[j] * (12/100));


mensagem += "R$" + salLiquido.toFixed(2) + "\n";
    }

alert(mensagem);