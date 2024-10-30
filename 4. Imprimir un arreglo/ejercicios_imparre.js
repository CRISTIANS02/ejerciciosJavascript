// escribe tu respuesta acá
function imprimirArreglo(...elementos) {
  for (const elemento of elementos) {
    console.log(elemento);
  }
}
// código de prueba
console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))
// 1
// Hola
// 2
// Mundo