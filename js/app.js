
// Función que ejecuta el juego
function jugarAdivinanza() {
    // Número secreto generado aleatoriamente entre 1 y 100
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0; // Contador de intentos
    
    // Mensaje de bienvenida
    alert("¡Bienvenido al juego de adivinanza! Adivina el número entre 1 y 100.");

    // Ciclo para permitir múltiples intentos
    while (true) {
        // Solicitamos al jugador que ingrese un número
        let respuesta = parseInt(prompt("Introduce un número entre 1 y 100:"));
    
        // Verificamos que la respuesta sea un número dentro del rango
        if (isNaN(respuesta) || respuesta < 1 || respuesta > 100) {
        alert("Por favor, ingresa un número válido entre 1 y 100.");
        continue; // Si la respuesta no es válida, solicitamos otro intento
    }

    // Incrementamos el contador de intentos
    intentos++;
    
    // Condicional para verificar la respuesta
    if (respuesta === numeroSecreto) {
        alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
        break; // Salimos del ciclo cuando el jugador adivine el número
        } else if (respuesta < numeroSecreto) {
        alert("El número secreto es mayor. Intenta de nuevo.");
        } else {
        alert("El número secreto es menor. Intenta de nuevo.");
        }
    }
}

// Llamamos a la función para iniciar el juego
jugarAdivinanza();
