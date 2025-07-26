import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import productRouter from './routes/products.router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware para leer body de formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static para subir archivos
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Configurar Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));

// Rutas
app.use('/products', productRouter);

// Ruta principal
app.get('/', (req, res) => {
  res.render('home');
});

// Levantar servidor
app.listen(3000, () => console.log('Servidor http://localhost:3000'));