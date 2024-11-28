// escribe tu respuesta acá
function fizzBuzz(numero) {
    // Verificar si es múltiplo de 3 y 5 primero
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "fizzbuzz";
    }
    // Verificar si es múltiplo de 3
    if (numero % 3 === 0) {
        return "fizz";
    }
    // Verificar si es múltiplo de 5
    if (numero % 5 === 0) {
        return "buzz";
    }
    // Si no es múltiplo de 3 ni de 5, devolver el número
    return numero;
}

// código de prueba
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8