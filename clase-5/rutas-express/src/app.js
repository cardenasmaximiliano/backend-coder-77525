import express from 'express'

import userRouter from './routers/users.router.js';
import petRouter from './routers/pet.router.js';

const app = express() //creamos la app de express
const PORT = 3030;

//midleware para leer json
//midleware, es una funcion que se ejecuta entre la peticion de un cliente y la respuesta de un servidor. 
//express lo que hace es ejecutar esta funcion de manera secuencial antes de que se llegue a la ruta final. 
// verificar persimos, procesar datos, monstrar algun log, algun manejo de errores ... 

app.use(express.json()) //midleware de aplicacion //se corre un midleware.

//conectamos los routers

app.use('/api/users', userRouter)
app.use('/api/pets', petRouter)

app.get('/', (req,res)=>{
    res.send('servidor funcionando')
})

app.listen(PORT, ()=>{
    console.log(`servidor en http://localhost:${PORT}`)
})
