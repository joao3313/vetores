let funcionarios = [];

function validarNome(nome) {
    return nome.trim().split(' ').length >= 2;
}

function validarIdade(idade) {
    return idade > 14 && idade < 120;
}

function validarSalario(salario) {
    return salario >= 2000 && salario <= 20000;
}

function adicionarFuncionario() {
    let nome = prompt("Informe o nome completo:");
    while (!validarNome(nome)) {
        alert("Nome inválido. Informe o nome completo.");
        nome = prompt("Informe o nome completo:");
        
    }

    let idade = parseInt(prompt("Informe a idade:"));
    while (!validarIdade(idade)) {
        alert("Idade inválida. A idade deve estar entre 15 e 119 anos.");
        idade = parseInt(prompt("Informe a idade:"));
    }

    let salario = parseFloat(prompt("Informe o salário (R$ 2000,00 a R$ 20000,00):"));
    while (!validarSalario(salario)) {
        alert("Salário inválido. O salário deve estar entre R$ 2000,00 e R$ 20000,00.");
        salario = parseFloat(prompt("Informe o salário (R$ 2000,00 a R$ 20000,00):"));
       
    }

    funcionarios.push({ nome, idade, salario });
    
    if (funcionarios.length < 5) {
        alert(`Faltam ${5 - funcionarios.length} funcionários para completar o cadastro.`);
    }

    if (funcionarios.length >= 5) {
        mostrarFuncionarios();
    }
    if (funcionarios.length >= 5) {
        return continuarCadastro();
    } else {
        return `Funcionário ${nome} cadastrado com sucesso! Total cadastrados: ${funcionarios.length}.`;
    }
}

function continuarCadastro() {
    const resposta = prompt("Você já cadastrou 5 funcionários. Deseja continuar cadastrando mais? (sim/não)");
    if (resposta.toLowerCase() === 'não') {
        cadastroEmAndamento = false;
        mostrarFuncionarios();
        return "Cadastro encerrado.";
    } else if (resposta.toLowerCase() !== 'sim') {
        return "Resposta inválida. Por favor, digite 'sim' ou 'não'.";
    }
    return "Continuando o cadastro...";
}

function mostrarFuncionarios() {
    let mensagem = "Funcionários cadastrados:\n";
    funcionarios.forEach(f => {
        mensagem += `Nome: ${f.nome}, Idade: ${f.idade}, Salário: R$ ${f.salario.toFixed(2)}\n`;
    });
    alert(mensagem);
}

// Chamada inicial para adicionar funcionários
while (funcionarios.length < 5) {
    adicionarFuncionario();
}


