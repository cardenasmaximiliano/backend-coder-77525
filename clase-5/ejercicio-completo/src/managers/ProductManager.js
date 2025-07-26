import fs from 'fs/promises'; //modulo fs/promises nos perimite usar promesas en el archivo 
const pathFile = './data/products.json'; //ruta de donde se guarda el producto

export class ProductManager { //creamos y exportamos productManager

async getAll() { //creamos el metodo async para llamar a getAll que va obtener los productos del json
        try {
      const data = await fs.readFile(pathFile, 'utf-8');
      return JSON.parse(data);
    } catch {
      return [];
    }
  }

    async save(producto){
       const productos = await this.getAll();//obtener el array actual de los productos que existen
        producto.id = productos.length + 1; //se asigna un id al nuevo producto
       productos.push(producto);//agrega el producto al array
        await fs.writeFile(pathFile, JSON.stringify(productos, null, 2)); //
        return producto // se devuelve el producto guardado
    }
}