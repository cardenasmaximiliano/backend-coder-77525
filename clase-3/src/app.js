//fs
//require nos permitir nativamente importar modulos o archivos en el proyecto . 

//require a diferencia del include es ejecutar importar y organizar modulos. 

//include lo que hace es copiar y pegar => ejemplo C

// const fs= require('fs');

// //creamos un archivo

// const fileName = 'archivo.txt';

// //fs writeFileSync => nos permite crear texto y al mismo tiempo crear archivo.
// fs.writeFileSync(fileName,"estamos viendo si se crea un archivo");
// console.log("archivo creado");

// //readFileSync => leemos

// const contenido = fs.readFileSync(fileName, 'utf-8');
// console.log("contenido de archivo", contenido);

// //appendFileAsync  => actualiza

// fs.appendFileSync(fileName, "\n esta es una linea nueva \n");

// console.log("actualizacion nueva");

// //unlikSync => eliminar

// fs.unlinkSync(fileName);
// console.log("eliminado archivo");


//ejemplito de modulo crypto => generar un pequño hash

// const crypto = require('crypto');

// const texto = "esto es un ejemplo de ash";

// //creamos hash

// const hash = crypto.createHash('sha256')
//                     .update(texto) //aca seleccionamos que se va a hashear.
//                     .digest('hex') //lo que hace es darnos un resultado que en este caso hex 

// console.log("texto creado por nosotros: ", texto);
// console.log("como se hasheo con SHA256: ", hash);
// console.log("como se hasheo con SHA256: ", hash);

// PATH => nos ayuda con las rutas de archivos

// __dirname => nos va a decir la ruta de directorio raiz

const path = require("path");

// console.log(__dirname);

// const ruta = path.join(__dirname,'datos', 'usuarios.json')

// console.log("construccion de una ruta", ruta)

// const archivo = '/user/docs/archivo.pdf';

// console.log(path.basename(archivo));
// console.log(path.extname(archivo));
// console.log(path.dirname(archivo));
/*
const http = require('http');
const PUERTO = 8080;

const server = http.createServer ((req,res)=>{
    res.writeHead(200, {'content-type': 'text/plain'}) //cabecera se escriba texto plano
    res.end("tenemos nuestro primer servidor con node")


})

server.listen(3000, ()=>{
    console.log(`servidor esta corriendo en http://localhost:${PUERTO}`)
})
*/