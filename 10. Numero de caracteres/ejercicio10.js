// escribe tu respuesta acá
function numeroDeCaracteres(string, caracter) {
    return string.split(caracter).length - 1;
}
// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", e)) // 4