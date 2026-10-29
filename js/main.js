//1. Crear un objeto Persona. Enunciado: Crea un objeto persona que tenga las propiedades: nombre, edad, y ciudad. Luego, imprime cada propiedad por separado en la consola.

let persona = {
  nombre: "Juan",
  edad: "40",
  ciudad: "Bilbao",
};

console.log(persona.nombre); // Imprime: Juan
console.log(persona.edad); // Imprime: 40
console.log(persona.ciudad); // Imprime: Bilbao



//2. Modificar propiedades. Enunciado: A partir del objeto persona anterior, cambia el valor de la propiedad ciudad y añade una nueva propiedad llamada profesión. Luego, imprime el objeto actualizado en la consola.

console.log(persona.ciudad = "Donostia");

//3. Objeto Libro. Enunciado: Crea un objeto llamado libro con las propiedades titulo, autor, y añoPublicacion. Añade un método llamado resumen que devuelva una cadena con un resumen del libro. Ejemplo de salida: "El libro 'Cien años de soledad' fue escrito por Gabriel García Márquez en 1967."

let libro = {
  titulo: "La vuelta de los que no fueron",
  autor: "Jami Pinto",
  añoPublicacion: "2026",
};

console.log(libro.titulo); // Imprime: La vuelta de los que no fueron
console.log(libro.autor); // Imprime: Jami Pinto
console.log(libro.añoPublicacion); // Imprime: 2026

//4. Array de objetos. Enunciado: Crea un array llamado estudiantes que contenga tres objetos. Cada objeto debe representar un estudiante con las propiedades: nombre, edad, y notaFinal. Luego, recorre el array e imprime el nombre y la nota final de cada estudiante.

let estudiantes = [
 {
  nombre: "jason",
  edad: 15,
  notaFinal: 9,
},

 {
  nombre: "Jon",
  edad: 23,
  notaFinal: 7,
},

 {
  nombre: "Leire",
  edad: 17,
  notaFinal: 8,
 }
]

estudiantes.foreach((estudiante) => 
  {
console.log(estudiante.nota)
});


// Imprime: 9, 7 , 8


//5. Método para calcular la edad. Enunciado: Crea un objeto persona con las propiedades nombre, anioNacimiento, y un método llamado calcularEdad que devuelva la edad actual de la persona basado en el año de nacimiento.


//6. Objeto Coche. Enunciado: Crea un objeto llamado coche con las propiedades marca, modelo, año y velocidadActual. Añade un método acelerar que incremente la velocidad actual en 10 unidades y otro método frenar que disminuya la velocidad actual en 10 unidades. Asegúrate de que la velocidad no sea negativa.

//7. Recorrer un objeto. Enunciado: Crea un objeto producto con las propiedades nombre, precio, cantidad. Usa un ciclo for...in para imprimir todas las propiedades y sus valores.

// 8. Contar propiedades. Enunciado: Crea un objeto animal con al menos cinco propiedades. Luego, escribe una función que cuente y devuelva el número de propiedades que tiene el objeto.

//9. Objeto dentro de otro objeto. Enunciado: Crea un objeto empresa que tenga las propiedades nombre y direccion. La propiedad direccion debe ser otro objeto con calle, ciudad, y codigoPostal. Luego, accede a las propiedades del objeto anidado e imprímelas.

let perso = {
  nombre: "Maider",
  edad: 21,
  direccion: {
    ciudad: "Arrasate",
    calle: "suhaitza",
    cp: "20500",
  },
};


const perso2 = perso;
perso2.nombre = "Ana";

console.log(perso2);
console.log(perso);

//10. Añadir métodos a objetos. Enunciado: Crea un objeto cuentaBancaria con las propiedades titular, saldo. Añade métodos depositar y retirar que modifiquen el saldo según sea necesario. El método retirar debe asegurarse de que no se pueda retirar más dinero del que hay disponible.