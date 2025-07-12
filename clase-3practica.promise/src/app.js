const UserManager = require('./managers/UserManager');

const path = require('path');

const usersFilePath = path.join(__dirname,'data','users.json');

const manager = new UserManager(usersFilePath);

const test = async () =>{
    console.log("agregar usuario")

    await manager.addUser({nombre:'maxi', email:'email@gmail.com', age:25});
    await manager.addUser({nombre:'maxi', email:'email@gmail.com', age:25});
 
    
    console.log()

    console.log("\n lista de usuarios \n");
    const todos = await manager.getUsers()
    console.log(todos);

   if(todos.length >0){
    const usuariosAEliminar = todos[1].id;
    await manager.deleteUsers(usuariosAEliminar);

   } 

   console.log(await manager.getUsers())
}

test()