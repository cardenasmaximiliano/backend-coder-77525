class ProductManager{
    constructor(){
        this.products = [];
        this.idIncrementable = 1;
    }

addProduct(title,description,price,thumbnail,code,stock){

    //validamos los campos de producto
    if(!title || !description || !price || !thumbnail || !code || !stock){
        console.log("todos los campos son obligatorios")
        return
    }
    //vemos que el code no se repita

    const codeExiste= this.products.some(product => product.code === code )
    if (codeExiste){
        console.log(`el codigo ${code} ya existe, no podemos agregar el producto`)
        return
    }


//some = funciona a partir de booleans, evalua si una condicion se cumple.


//crear nuestro producto a ingresar...

    const newProduct ={
    id: this.idIncrementable,
    title,
    description,
    price,
    thumbnail,
    code, 
    stock
    }

    this.products.push(newProduct);
    this.idIncrementable++;

    console.log(`producto ${title} fue ingresado correctamente`)

}

getProducts(){
    return this.products
}

getProductsById(id){
    const product = this.products.find(product => product.id === id)
        if(product){
            return product
        } else{
            console.log("no se encontro")
        }
    }
}

const manager = new ProductManager();


manager.addProduct("camiseta","la de river papá",1000000,"./img/camisetaRiver.jpg", "abc001",50);
manager.addProduct("camiseta","la de bocaa",1000000,"./img/camisetaRiver.jpg", "abc002",50);
manager.addProduct("camiseta","la de San lorenzo",500,"./img/camisetaRiver.jpg", "abc003",100);
manager.addProduct("camiseta","la de yupanqui",1000,"./img/camisetaRiver.jpg", "abc001",200);

//mostrar los productos

console.log("\n, lista de productos:")
console.log(manager.getProducts())

console.log("\n probar el buscador por id")
console.log(manager.getProductsById(2))

console.log("\n probar el buscador por id")
console.log(manager.getProductsById(5))

