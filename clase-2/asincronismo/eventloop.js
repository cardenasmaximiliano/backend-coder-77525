console.log("inicio")

setTimeout(()=>{
    console.log('timeout')
},0) //task queue

Promise.resolve().then(()=>{
    console.log("promesa finalizada o resulta")
}) //microstack

console.log("fin")