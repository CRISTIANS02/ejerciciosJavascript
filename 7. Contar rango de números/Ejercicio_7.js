// escribe tu respuesta acá
function contarRango(inicio, fin) {
    let contador = 0;
    // Ciclo que recorre desde el número siguiente a inicio 
    // hasta el número anterior a fin
    for (let i = inicio + 1; i < fin; i++) {
        contador++;
    }
    
    return contador;
}
// código de prueba
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0