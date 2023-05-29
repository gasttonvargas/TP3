//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

console.log("Los doce meses del año:");
for (var i = 0; i < meses.length; i++) {
  console.log((i + 1) + ". " + meses[i]);
}

//2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

let ciudades = ['Nueva York, Estados Unidos','Barcelona, España','Tokio, Japón','Londres, Reino Unido','Roma, Italia','Pekín, China','Río de Janeiro, Brasil','Ámsterdam, Países Bajos','Sídney, Australia','El Cairo, Egipto'
  ];
  
  console.log("El arreglo de ciudades tiene " + ciudades.length + " elementos");

  document.write("● Elemento 1er posicion: " + ciudades[0] + "<br>");
  document.write("● Elemento 3er posicion: " + ciudades[2] + "<br>");
  document.write("● Elemento ultima posicion: " + ciudades[ciudades.length - 1] + "<br>");
  
  ciudades.push("París");
  
  console.log("Elemento segunda posicion: " + ciudades[1]);
  
  ciudades[1] = "Barcelona";

  console.log("Arreglo de ciudades");
  for (let i = 0; i < ciudades.length; i++) {
    console.log("● Elemento: " + ciudades[i]);
    document.write("● Elemento: " + ciudades[i] + "<br>");
  }
  
//3- Escribir un script que simule el lanzamiento de dos dados.

let apariciones = new Array(13).fill(0); 

for (let i = 0; i < 50; i++) {
  
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  
  let suma = dado1 + dado2;

  apariciones[suma]++;
}


console.log("Suma");
for (let i = 2; i <= 12; i++) {
  console.log(i);
}

console.log("\nApariciones");
for (let i = 2; i <= 12; i++) {
  console.log(apariciones[i]);
}

//4- Escribir el código de una función a la que se pasa como parámetro un número

let miNumero = 20;

if (miNumero % 2 === 0) {
  console.log("Mi número es par");
} else {
  console.log("Mi número es impar");
}

//5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento
let Cadenas = function(cadena) {
    if (cadena === cadena.toUpperCase()) {
      return "solo mayúsculas";
    } else if (cadena === cadena.toLowerCase()) {
      return "solo minúsculas";
    } else {
      return "mezcla de mayúsculas y minúsculas";
    }
  };
  
  
  let texto = "HOLA MUNDo";
  let resultado = Cadenas(texto);
  console.log(resultado);
  
//6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo
let ladoA = parseInt(prompt("Ingresa el valor del lado A del rectángulo:"));
let ladoB = parseInt(prompt("Ingresa el valor del lado B del rectángulo:"));

let perimetro = 2 * (ladoA + ladoB);
console.log(perimetro);

//7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla
let numero = parseInt(prompt("Ingresa un número:"));

function tabla(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}

tabla(numero);
