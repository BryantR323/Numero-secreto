let numeroSecreto;
let intentos = 0;

function iniciarNuevoJuego() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    intentos = 0;
    document.getElementById('message').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('newGameButton').style.display = 'none';
}

document.getElementById('guessButton').addEventListener('click', function() {
    const adivinanza = parseInt(document.getElementById('guessInput').value);
    intentos++;

    if (isNaN(adivinanza)) {
        alert('Por favor, ingresa un número.');
        return;
    }

    if (adivinanza < numeroSecreto) {
        document.getElementById('message').textContent = 'El número secreto es mayor.';
    } else if (adivinanza > numeroSecreto) {
        document.getElementById('message').textContent = 'El número secreto es menor.';
    } else {
        document.getElementById('message').textContent = `¡Felicidades! Adivinaste el número en ${intentos} intento(s).`;
        document.getElementById('newGameButton').style.display = 'block';
    }

    document.getElementById('guessInput').value = '';
});

document.getElementById('newGameButton').addEventListener('click', iniciarNuevoJuego);

iniciarNuevoJuego();
