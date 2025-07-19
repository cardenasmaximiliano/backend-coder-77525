import express from 'express'; // importamos express

const app = express() //va a contener todas las funciones de express

const PORT = 8080;

/*
se pone primero un app.get() => apertura del endpoint 
esta parte indica al protocolo http que la ruta /SALUDO esspera una peticion de get
si ponemos una ruta diferente no lo deberia reconocer.

*/
app.get('/saludo',(req, res) =>{
    res.send("hola esto salio bien se subio el servidor")
})

/*
es encesiario siempre que apliquemos en este caso app.listen, por que en caso de que no lo apliquemos
no vamos a ener respuesta. 
*/

app.listen(PORT, ()=>{
    console.log(`escuchando el puerto ${PORT}`)
})