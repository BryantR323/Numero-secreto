let numeroSecreto;
let intentos = 0;

function iniciarNuevoJuego() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    intentos = 0;
    document.getElementById('mensaje').textContent = '';
    document.getElementById('entradaNumero').value = '';
    document.getElementById('botonNuevoJuego').style.display = 'none';
}

document.getElementById('botonIntentar').addEventListener('click', function() {
    const adivinanza = parseInt(document.getElementById('entradaNumero').value);
    intentos++;

    if (isNaN(adivinanza)) {
        alert('Por favor, ingresa un número.');
        return;
    }

    if (adivinanza < numeroSecreto) {
        document.getElementById('mensaje').textContent = 'El número secreto es mayor.';
    } else if (adivinanza > numeroSecreto) {
        document.getElementById('mensaje').textContent = 'El número secreto es menor.';
    } else {
        document.getElementById('mensaje').textContent = `¡Felicidades! Adivinaste el número en ${intentos} intento(s).`;
        document.getElementById('botonNuevoJuego').style.display = 'block';
    }

    document.getElementById('entradaNumero').value = '';
});

document.getElementById('botonNuevoJuego').addEventListener('click', iniciarNuevoJuego);
iniciarNuevoJuego();
