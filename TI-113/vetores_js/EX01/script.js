let funcionarios = []; // Lista de funcionários

// Função para validar o nome completo.
// split(caractere): Divide uma string em um vetor de strings.
//length retornar a quantidade de caracteres de uma string ou o tamanho de um array.
// trim  usado para remover espaços em branco de ambas as extremidades de uma string.


function Nome(nome) {
    return nome.trim().split(" ").length > 1;
}

// Função para validar a idade
function Idade(idade) {
    return idade >= 14 && idade <= 120;
}

// Função para validar o salário
function Salario(salario) {
    return salario >= 2000 && salario <= 20000;
}

// Função para cadastrar um funcionário 
function Funcionario() {
    if (funcionarios.length >= 100) {
        alert("O limite máximo de 100 funcionários foi atingido.");
        return;
    }
// O (!) significa "estritamente não igual" e retorna true quando os operandos não são iguais ou não são do mesmo tipo.
    let nome = prompt("Digite o nome completo do funcionário:");
    while (!nome || !Nome(nome)) {
        alert("Inválido: O nome deve ser completo ( Nome e sobrenome).");
        nome = prompt("Digite o nome completo do funcionário:");
    }
// isNaN é usada para verificar se um valor ou expressão é NaN, ou seja, não é um número.
// parseInt do JavaScript é usada para converter uma string em um inteiro.

    let idade = parseInt(prompt("Digite a idade do funcionário (entre 14 e 120 anos):"));
    while (isNaN(idade) || !Idade(idade)) {
        alert("Inválido: A idade deve estar entre 14 e 120 anos.");
        idade = parseInt(prompt("Digite a idade do funcionário (entre 14 e 120 anos):"));
    }
// parseInt do JavaScript é usada para converter uma string em um inteiro.

    let salario = parseFloat(prompt("Digite o salário bruto do funcionário (entre R$ 2000,00 e R$ 20000,00):"));
    while (isNaN(salario) || !Salario(salario)) {
        alert("Inválido: O salário deve estar entre R$ 2000,00 e R$ 20000,00.");
        salario = parseFloat(prompt("Digite o salário bruto do funcionário (entre R$ 2000,00 e R$ 20000,00):"));
    }

    // Armazena o funcionário na lista
    funcionarios.push({ nome, idade, salario });
}

// Função para mostrar a lista de funcionários na página HTML
// getElementById é usada para retornar um elemento do DOM que tem um ID específico.
function ExibeFuncionarios() {
    let lista = document.getElementById("listaFuncionarios");
    lista.innerHTML = "<h2>Funcionários Cadastrados</h2>";

    // O innerHTML pode ser usado para receber o conteúdo de um elemento HTML ou para definir um novo conteúdo para ele.

    if (funcionarios.length === 0) {
        lista.innerHTML += "<p>Nenhum funcionário cadastrado.</p>";
        return;
    }
    // </td><td> As tags <td> devem estar dentro de tags <tr>
    // que por sua vez devem estar dentro de uma tag <table>.
    // A tag <tr> cria uma linha dentro de uma tabela, enquanto a tag <table> define a tabela.

   
    // O forEach é um método do JavaScript que é usado para percorrer arrays e executar uma função para cada elemento deles.
    // É útil quando é necessário executar a mesma função em todos os itens de uma matriz

    // A tag <tr> é usada em HTML para criar linhas dentro de uma tabela, enquanto a tag <td>
    // é usada para criar colunas dentro dessas linhas. As tags <td> devem estar dentro de tags <tr>, que por sua vez devem estar dentro de uma tag <table>

    let tabela = "<table><tr><th> Nome </th><th> Idade </th><th> Salário Bruto (R$) </th></tr>";
    funcionarios.forEach(funcionario => {
        tabela += `<tr><td>${funcionario.nome}</td><td>${funcionario.idade}</td><td>${funcionario.salario.toFixed(2)}</td></tr>`;
    });
    tabela += "</table>";

    lista.innerHTML = tabela;
}

// Função para iniciar o processo de cadastro
function iniciarCadastro() {
    // Cadastra os 5 primeiros funcionários obrigatoriamente
    while (funcionarios.length < 5) {
        Funcionario();
    }

    // Exibe os primeiros 5 funcionários cadastrados
    ExibeFuncionarios();

    // Pergunta se o usuário deseja continuar cadastrando mais funcionários
    while (funcionarios.length < 100 && confirm(" Deseja cadastrar mais um funcionário?")) {
        Funcionario();
        ExibeFuncionarios(); // Atualiza a lista com o novo funcionário
    }

    alert("Cadastro concluído.");
}


