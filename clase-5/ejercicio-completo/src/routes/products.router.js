import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { ProductManager } from '../managers/ProductManager.js';

const router = Router();

const manager = new ProductManager();//creamos una instancia, para poder usar manager.getAll y el save

//configuramos multer

const storage = multer.diskStorage({
   destination: (req, file, cb) => cb(null, 'uploads'), //define que se guarden los archivos en la carpeta upload
 filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
    //renombramos el archivo a traves de lo que es la fecha actual + extencion original

})
const upload = multer({ storage });//crear la instancia de multer con su configuracion
//para utilizarlo como midleware de ruta para recibir los archivos


//aca lo que estamos haciendo es obtener los productos al usar el manager getall, y renderizar
//la vista a product handlebars. 
router.get('/', async (req, res) => {
  const productos = await manager.getAll();
  res.render('products', { productos });
});

//nos siver para que en el formulario se pueda trabajar con los campos recibidos y la imagen
router.post('/', upload.single('imagen'), async (req, res) => { 
    const {nombre,precio} = req.body; //esto va  recibir los datos que se ingresen por formulario
   const imagen = req.file ? '/uploads/' + req.file.filename : null; //nos va a contruir una url para que se visualice la imagen

    //si falta algun dato que nos devuelva error
    if (!nombre || !precio) {
    return res.send('Faltan datos');
  }

    //guradamos el nuevo producto en el json usando el manager
 await manager.save({ nombre, precio, imagen });   

    //cuando se guardaron los datos, redirija al usuario a la lista de productos actualizados.
   res.redirect('/products');
})

export default router;

