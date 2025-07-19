import express from 'express';



//midlewares

// app.use(express.json())
// app.use(express.urlencoded({extended: true})) //nos sirve esta config. para entender y procesar datos complejos
//que se envien en la url.

/*
app.get('/ejemploQueries',(req,res)=>{
    //con los query nosotros podemos despues de ? poner informacion

    let consultas = req.query;
    res.json({consultas});

})
    }
*/
// const usuarios =[
//     {id:"1", nombre:"arlando",sexo: "M"},
//     {id:"2", nombre:"micaela",sexo: "F"},
//     {id:"3", nombre:"maxi",sexo: "M"},
//     {id:"4", nombre:"andrea",sexo: "F"},

// ]

// app.listen(8080, ()=> console.log('listo para recibir peticiones'))

// //crear enpoints para filtrar datos en este caso por sexo

// app.get('/',(req,res)=>{
//     let sexoIngresado = req.query.sexo; //agarra el params por sexo
//     //si no se ingreso el sexo,en general o esfecifico, retorne todos los ususarios
//     if(!sexoIngresado || (sexoIngresado!=="M" && sexoIngresado!== "F"))
//         return res.json(usuarios);
//     //en caso contrario que continue con el filtrado
//     let usuariosFiltrados= usuarios.filter(user => user.sexo === sexoIngresado)
//     res.json({usuarios: usuariosFiltrados})

//     })

//req.params => es un objeto que va a contener todos los parametros de una ruta,
//que se van a estar capturades de una url.
/*
lo que se busca es el parametro de urta, que se va a comportar como una variable
: 

*/

// app.get('/unparametro/:id',(req,res)=>{
//     res.send(`id del usuario: ${req.params.id}`) 

// })

// const usuarios =[
//      {id:"1", nombre:"arlando",sexo: "M"},
//      {id:"2", nombre:"micaela",sexo: "F"},     
//      {id:"3", nombre:"maxi",sexo: "M"},
//      {id:"4", nombre:"andrea",sexo: "F"},

// ]
// app.get('/',(req,res)=>{
//     //primero mandamo comom res.json mostrar que es un array 
    
//     res.json({usuarios,"masInfo":"mas info"})
//     //lo recomendable siempre es mandar la informacion en formato objeto

// })

// app.get('/:idUsuario',(req, res)=>{
//     let idUsuario= req.params.idUsuario; //obtener el dato del id del usuario

//     let usuario = usuarios.find(user => user.id === idUsuario)
    
//     if(!usuario) return res.send({error:"usuario no encontrado"})

//     res.send(usuario)
// })


const express = require('express');
const app = express();

// Middleware que indica que los datos enviados en formato JSON serán interpretados correctamente
app.use(express.json());

// Middleware que permite procesar datos enviados desde formularios HTML (URL encoded)
app.use(express.urlencoded({ extended: true }));

// Inicializamos el servidor para escuchar peticiones en el puerto 8080
app.listen(8080, () => console.log('✅ Listo para recibir peticiones en el puerto 8080'));

// Creamos un array con algunos usuarios como ejemplo
let users = [
    { id: 1, nombre: "Maximiliano", apellido: "Cárdenas" }
];


//  GET /api/user
// Método GET: devuelve todos los usuarios existentes
app.get('/api/user', (req, res) => {
    res.json({ users }); // Devolvemos la lista completa
});


//  GET /api/user/:id
// Creamos un método para obtener información específica utilizando params (ruta dinámica)
app.get('/api/user/:id', (req, res) => {
    const userId = Number(req.params.id); // Convertimos el id a número para comparar correctamente
    const user = users.find(user => user.id === userId); // Buscamos el usuario con ese ID

    if (!user) {
        // Si no encontramos al usuario, devolvemos un error
        return res.status(404).json({ error: ' Usuario no encontrado' });
    }

    res.json({ user }); // Devolvemos el usuario encontrado
});


// POST /api/user
// Método POST: se utiliza para crear un nuevo recurso (usuario)
app.post('/api/user', (req, res) => {
    const user = req.body; // req.body contiene los datos enviados por el cliente (nombre, apellido, etc.)

    // Validamos que se envíen todos los campos necesarios
    if (!user.nombre || !user.apellido) {
        return res.status(400).send({
            status: "error",
            error: " Valores incompletos. Se requieren 'nombre' y 'apellido'."
        });
    }

    // Le asignamos un nuevo ID automáticamente
    user.id = users.length + 1;

    // Agregamos el nuevo usuario al array
    users.push(user);

    // Devolvemos una respuesta exitosa
    res.status(201).send({
        status: "success",
        message: "Usuario creado correctamente",
        user
    });
});


// PUT /api/user/:id
// Método PUT: se utiliza para actualizar un recurso existente
app.put('/api/user/:id', (req, res) => {
    const userId = Number(req.params.id);
    const updateUser = req.body;

    // Buscamos el índice del usuario en el array
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return res.status(404).send({
            status: "error",
            error: "❌ Usuario no encontrado"
        });
    }

    //  Dos opciones para actualizar:

    // PCIÓN A (actualiza completamente el objeto — menos recomendable):
    // users[userIndex] = updateUser;

    //  OPCIÓN B (más recomendable): solo actualiza los campos recibidos
    users[userIndex] = { ...users[userIndex], ...updateUser };

    res.send({
        status: "success",
        message: "Usuario actualizado correctamente"
    });
});


// DELETE /api/user/:id
// Método DELETE: elimina un usuario del array
app.delete('/api/user/:id', (req, res) => {
    const userId = Number(req.params.id);

    // Buscamos la posición del usuario
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return res.status(404).send({
            status: "error",
            error: "Usuario no encontrado"
        });
    }

    // Eliminamos el usuario con splice según su posición
    users.splice(userIndex, 1);

    res.send({
        status: "success",
        message: " Usuario eliminado correctamente"
    });
});