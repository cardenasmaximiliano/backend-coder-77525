console.log("preparamos grilla de salida");

const prepararGrilla = new Promise((resolve, reject)=>{
    setTimeout(()=>{

        const todoListo = false;

        if(todoListo){
            const grilla =[
                {posicion:1, piloto:"Max Verstappen", equipo:"red bull"},
                {posicion:2, piloto:"Charles Leclerc", equipo:"Ferrari"},
                {posicion:3, piloto:"Oshcar Piashtri", equipo:"McLaaren"},
                {posicion:4, piloto:"Colapa", equipo:"Alpine"}
            ];
            resolve(grilla)
        } else{
            reject("hay problemas tecnicos, no podemos armar la grilla")
        }
    })

})

prepararGrilla
    .then(grilla =>{
        console.log("grilla confirmada:")
        grilla.forEach(auto => {
            console.log(`${auto.posicion} - ${auto.piloto} - ${auto.equipo}`)
        });
    })
    .catch(error =>{
        console.log("hay error")
    })
    console.log("esperamos la confirmacion")

    