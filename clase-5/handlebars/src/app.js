import express from 'express'
// import userRouter from './routers/user.route.js'

// const app = express()
// app.use(express.json())
// app.use('/api/users', userRouter)
// app.use('uploads',express.static('uploads')) // esta nos va a servir para las imagens

// app.listen(4040, ()=> console.log('escuchando puerto'))

import{engine} from 'express-handlebars';
import path from 'path'
import { fileURLToPath } from 'url';
import users from './data/users.js'; //importar usuarios


//configurar el dirname

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


//instaciamos express

const app = express()

//configurar handlebars

app.engine('handlebars', engine())

app.set('view engine', 'handlebars');

//indicar las carpetas de vista
app.set('views', path.join(__dirname, 'views'))

//carpeta para archivos estaticos
app.set(express.static(path.join(__dirname, 'public'))); //esta linea es para las carpetas de archivos estaticos css img etc

//ruta principal
app.get('/', (req,res)=>{
    const randomIndex = Math.floor(Math.random()*users.length)

    const selectUser = users[randomIndex]
    
    res.render('home',{user:selectUser})
})

app.listen(3030, ()=>{
    console.log('servidor escuchando en http://localhost:3000')
})

 