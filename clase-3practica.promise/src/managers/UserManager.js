const fs = require('fs').promises;

class UserManager{
    constructor(path){
        this.path = path;
    }
     ///metodo obtener los usuarios
    async getUsers(){
        try{
            const data = await fs.readFile(this.path, 'utf-8');
            return JSON.parse(data); //CONVERTIMOS ESES ARCHIVO EN ARRAY DE OBJETOS
            
        }catch(error){
            if(error.code === 'ENOENT') return[];//SI EL ARCHIVO NO EXISTE QUE DEVUELVA ARRAY VACIO
            console.error("hay error de lectura"); //SI HAY OTRO ERROR que tambien devuelva 
            return [];
        }
    }

    //agregar usuarios

    async addUser(user){
        try{
            const users = await this.getUsers() //lee todo los usuarios
            const newUsers = {
                id:Date.now(), ...user
            } // creamos un usuario con id unico (se cree por fecha) y copiamos todo la info de user
            users.push(newUsers) //agregar el usuario al array
            await fs.writeFile(this.path, JSON.stringify(users, null,2)); //aca aconvertimos lo que agregamos a formato JSON
            console.log("usuario agregado")
        }catch(error){
            console.error("error al agregar el usuario",error)
        }
    }

    //este método eliminará un usuario específico de la lista basado en su userId. Leerá el archivo,
    //  filtrará el array para
    //  excluir al usuario correspondiente, y luego escribirá la lista actualizada en el archivo.

    async deleteUsers(userId){
        try{
            const users = await this.getUsers(); //lee usuarios actuales
            const filtered = users.filter( user => user.id !==  userId)
            await fs.writeFile(this.path, JSON.stringify(filtered, null, 2));
            console.log(`usuario eliminado ${userId}`)
        }catch(error){
            console.error("error al eleminar los usuarios")
        }
    }
}

module.exports = UserManager;