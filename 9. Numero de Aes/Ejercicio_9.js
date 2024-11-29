// escribe tu respuesta acá
function numeroDeAes(texto) {
    // Usando split
    return texto.toLowerCase().split('a').length - 1;
}

// O usando el método match
function numeroDeAes(texto) {
    const coincidencias = texto.toLowerCase().match(/a/g);
    return coincidencias ? coincidencias.length : 0;
}

// O usando un ciclo for
function numeroDeAes(texto) {
    let contador = 0;
    for (let letra of texto.toLowerCase()) {
        if (letra === 'a') {
            contador++;
        }
    }
    return contador;
}
// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0