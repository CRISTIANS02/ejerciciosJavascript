// escribe tu respuesta acá
function sumarRango(inicio, fin) {
    // Si los números son iguales, la suma es 0
    if (inicio === fin) {
        return 0;
    }
    
    // Calcular la suma de los números entre inicio y fin
    // Usando la fórmula de suma de series aritméticas
    const cantidadNumeros = fin - inicio - 1;
    const primerNumero = inicio + 1;
    const ultimoNumero = fin - 1;
    
    return (cantidadNumeros * (primerNumero + ultimoNumero)) / 2;
}
// código de prueba
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0