function isConsonant(letter) {
    const vowels = 'aeiouAEIOU';
    return letter.length === 1 && !vowels.includes(letter);
}

function countConsonants(letters) {
    let consonants = [];
    let count = 0;

    for (let i = 0; i < letters.length; i++) {
        let letter = letters[i].trim(); // Remove espaços em branco
        if (isConsonant(letter)) {
            consonants.push(letter);
            count++;
        } else if (letter.length !== 1) {
            return 'Por favor, insira apenas letras individuais.';
        }
    }

    return `Número de consoantes: ${count}. Consoantes: ${consonants.join(', ')}`;
}

function getInput() {
    let input = prompt('Digite 10 letras separadas por vírgulas:');
    let letters = input.split(',').map(letter => letter.trim());

    if (letters.length !== 10) {
        alert('Por favor, insira exatamente 10 letras.');
    } else {
        alert(countConsonants(letters));
    }
}

// Chama a função para iniciar o processo
getInput();