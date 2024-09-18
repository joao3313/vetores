let alunos = []; // Lista de alunos

// Função para validar o nome completo
function Nome(nome) {
    return nome.trim().split(" ").length > 1;
}

// Função para validar a matrícula
function Matricula(matricula) {
    return /^[0-9]{8}$/.test(matricula); // A matrícula deve ter exatamente 8 dígitos numéricos
}

// Função para validar as notas
function Nota(nota) {
    return nota >= 0 && nota <= 10;
}

// Função para cadastrar um aluno
function cadastrarAluno() {
    if (alunos.length >= 100) {
        alert("O limite máximo de 100 alunos foi atingido.");
        return;
    }

    let nome = prompt("Digite o nome completo do aluno:");
    while (!nome || !Nome(nome)) {
        alert("Inválido: O nome deve ser completo (com nome e sobrenome).");
        nome = prompt("Digite o nome completo do aluno:");
    }

    let matricula = prompt("Digite a matrícula do aluno (8 dígitos):");
    while (!matricula || !Matricula(matricula)) {
        alert("Inválido: A matrícula deve conter 8 dígitos numéricos.");
        matricula = prompt("Digite a matrícula do aluno (8 dígitos):");
    }

    let materia = prompt("Digite a matéria do aluno:");
    while (!materia) {
        alert("Inválido: A matéria não pode estar vazia.");
        materia = prompt("Digite a matéria do aluno:");
    }

    let nota1 = parseFloat(prompt("Digite a primeira nota (0 a 10):"));
    while (isNaN(nota1) || !Nota(nota1)) {
        alert("Inválido: A nota deve estar entre 0 e 10.");
        nota1 = parseFloat(prompt("Digite a primeira nota (0 a 10):"));
    }

    let nota2 = parseFloat(prompt("Digite a segunda nota (0 a 10):"));
    while (isNaN(nota2) || !Nota(nota2)) {
        alert("Inválido: A nota deve estar entre 0 e 10.");
        nota2 = parseFloat(prompt("Digite a segunda nota (0 a 10):"));
    }

    let nota3 = parseFloat(prompt("Digite a terceira nota (0 a 10):"));
    while (isNaN(nota3) || !Nota(nota3)) {
        alert("Inválido: A nota deve estar entre 0 e 10.");
        nota3 = parseFloat(prompt("Digite a terceira nota (0 a 10):"));
    }

    let media = ((nota1 + nota2 + nota3) / 3).toFixed(2);

    // Armazena o aluno na lista
    alunos.push({ nome, matricula, materia, nota1, nota2, nota3, media });
}

// Função para mostrar a lista de alunos na página HTML
function mostrarAlunos() {
    let lista = document.getElementById("listaAlunos");
    lista.innerHTML = "<h2> Alunos Cadastrados </h2>";

    if (alunos.length === 0) {
        lista.innerHTML += "<p> Nenhum aluno cadastrado. </p>";
        return;
    }

    let tabela = "<table><tr><th> Nome </th><th> Matrícula </th><th> Matéria </th><th> Notas e Média </th></tr>";
    alunos.forEach(aluno => {
        tabela += `<tr>
            <td>${aluno.nome}</td>
            <td>${aluno.matricula}</td>
            <td>${aluno.materia}</td>
            <td>N1: ${aluno.nota1.toFixed(2)} / N2: ${aluno.nota2.toFixed(2)} / N3: ${aluno.nota3.toFixed(2)} / Média: ${aluno.media} </td>
        </tr>`;
    });
    tabela += "</table>";

    lista.innerHTML = tabela;
}

// Função para iniciar o processo de cadastro
function iniciarCadastro() {
    // Cadastra os 5 primeiros alunos obrigatoriamente
    while (alunos.length < 5) {
        cadastrarAluno();
    }

    // Exibe os primeiros 5 alunos cadastrados
    mostrarAlunos();

    // Pergunta se o usuário deseja continuar cadastrando mais alunos
    while (alunos.length < 100 && confirm("Deseja cadastrar mais um aluno?")) {
        cadastrarAluno();
        mostrarAlunos(); // Atualiza a lista com o novo aluno
    }

    alert("Cadastro concluído.");
}
