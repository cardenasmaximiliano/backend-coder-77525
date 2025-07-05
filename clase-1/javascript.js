//javascript => lo podemos usar del lado del front como del lado del back. 
/*

lenguaje interpretado.
se ejecuta en un navegador. (en back) usamos node.js que es un entorno de ejecucion de javascript.

es instalar un motor que corra js de manera local. V8. 
crear servidores, manejar base de datos, hacer aplicaciones del lado del serivdor, automatizacion, bots, scripts etc 

generar aplicaciones => que son principalmente de tiempo real, netflix. wtsapp. 



*/

//variable => espacio de memoria reservada en una computadora donde se puede guardar un dato para usarlo despues. 

// var , let, const

//scope o ambito, es el alcance de una variable, que nos permite ejecutarla o no. GLOBAL y locales. 

//let => que nos permite a nosotros cambiar el tipo
// const => viene de constante, y se usa para mantener un tipo de dato fijo a lo largo de mi codigo. 

// let nombreDevariable = TIPODEDATO ;
/*
 
LAS VARIABLES DE TIPO LET SUELEN ESCRIBIRSE EN CAMELCASE
LAS VARIABLES DE TIPO CONST  NOMBRE_DE_VARIABLE 

*/

//let nombre; //declarando 

//nombre = "maxi"; //inicialiando

//let nombre = "maxi"; //declarar e iniciar

//solamente se hace esto con los tipo let

//tipos de dato

//strings => cadena de texto "" '' `alt + 96 `  =>  ${template string}
//numbers => numeros 1 2 3
//boolenados => true o false 
//undefined => que esta declarado pero no tiene valor asignado
//null => lo generamos intencionalmente para decir que esta vacio.// cuando queremos controlar algo.

// arrays [ ], funciones(), objetos{}.


//condicionales => nos permiten a partir de condiciones ejecutar bloques de codigo, si se cumple hacemos esto, si no lo otro.

 //if( condicion){ bloque de codigo a ejecutar } => siempre se ejecuta si algo es verdaero
 
//else if (condicion){ bloque de codigo a ejecutar}

 //else{ bloque de codigo a ejecutar}  => se ejecuta en caso de que if no funcione o de falso


 //problema

 //se pide un programa que simule calificaciones.

//tiene que tener una variable nota

// segun la nota debe ser  0 3 => desaprobado, 4 0 6 =>
//  safaste pero estudia, 7 a 8 => bien cumpliste => 9 a 10 (bien hecho.)


//switch => una estructura de control, que usamos para comparar decisiones 
//con varias opciones multiples



let dia = "martes";

switch(dia){
    case "lunes":
        console.log("hoy es lunes")
    break;
    case "martes":
        console.log("hoy es martes")

    default:
        console.log("no sabemos que dia es")    
    }

//bucles

// conteo => es que sabemos cuantas veces va a ejecutarse el bucle. for

//condicionales => se ejecuta hasta que se cumpla una condicion dada. while do while

// for(inicializacion;condicion;contador ++ o --){
// se ejecuta bloque de codigo
//}

for(let i = 1; i <=5; i++){
    //i++ => i + 1 

    console.log("repetimos numerito" + i);

}

//bucle while  / do while 

// let contador = 1;

// while(contador <=5){
//     console.log("se esta iterando" + contador)
//     contador ++
// }

let contador = 1;

do{
    console.log("esto se va a ejecutar");
    contador ++;
}while(contador <=5);

//funciones

// function saludar(parametros){
//     //crea el codigo a ejecutar

//     return //opcional
// }
function saludar(nombre){
    console.log(`hola soy ${nombre}`)
}

saludar("pepe")

//funciones tipo flecha, arrow function, sirve para escribir codigo en una sola 
//linea y tiene el return de manera implicita

const MULTIPLICAR = (a, b) => a * b;

console.log(MULTIPLICAR(4,2));


//funciones anonimas
// asignamos funciones a variables
//pasamos funciones como parametros (callbacks)
//ejecutar codigo sin llamar a la funcion 


// const saludo = function (nombre){
//     //codigo a ejecutar
// }

// setTimeout(function(){
//     console.log("se ejecutaa coda 2 seg")
// }, 2000)

/// arrays => [corchetes]
let array = [1, "string", true];
//el array siempre respeta la posicion => Indice


console.log(array);

//metodos en los arrays => son funciones especiales que nos permiten trabajar con los arrays.

//push => que nos permite agregar un elemento al final del array

array.push("pepe",2)

console.log(array)

//pop => nos quita un elemento al final del array

array.pop();

console.log(array)

//shift => quitaba pero al inicio del array

//unshift => agrega elemento al inicio

//splice si quiero agregar un elemento en cualquier posicion

array.splice(1,0, "kiwi")

//(1 inidica donde inicia, 0 va indicar la cantidad de elementos que queremos que se borre, )
console.log(array)

//objeto => no es mas que un bloque de codigo que describe un elemento, que posee caracteristicas
// clave y el valor

//es una estructura que nos permite almacenar datos complejos en claves y valores.


// let persona = {
//     nombre:"gisele",
//     apellido: "Hayes",
//     edad: 37,
//     direccion:{
//         calle: "av. siempre viva",
//         numero: 123,
//         ciudad: "la plata"
//     },
//     registrado:true, //el ultimo elemento dentro del objeto no necesita ,
// };

// let personas= [
//     {
//         nombre:"gisele",
//     apellido: "Hayes",
//     edad: 37,
//     direccion:{
//         calle: "av. siempre viva",
//         numero: 123,
//         ciudad: "la plata"
//     },
//     registrado:true, //el ultimo elemento dentro del objeto no necesita ,
//     },
//     {
//     nombre:"jorge",
//     apellido: "rivero",
//     edad: 27,
//     direccion:{
//         calle: "av. luro",
//         numero: 123,
//         ciudad: "mar del plata"
//     },
//     registrado:true,
//  } //el ultimo elemento dentro del objeto no necesita ,
// ]

// ;

// console.log(personas[0])


//las clases no son mas que plantillas que nos sirven para crear objetos con propiedad y metodos.

class Persona{
    constructor(nombre,apellido,edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad = edad;
    }

    presentacion(){
        console.log(`hola yo soy ${this.nombre} ${this.apellido}, y tengo ${this.edad}`)
    }
}

let personaUno = new Persona("oclivar","regla",21);
let personaDos = new Persona("ignacio","Guerrero",25);

personaUno.presentacion()
personaDos.presentacion()