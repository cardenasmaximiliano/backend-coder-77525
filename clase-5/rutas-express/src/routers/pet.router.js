import { Router } from "express";


const router = Router()

const pets = []

//metodo get para obtener el arreglo

router.get('/', (req,res)=>{
    res.json(pets)
})

//metodo post para agregar nuevas mascotas

router.post('/', (req,res)=>{
    const pet = req.body;
    pets.push(pet)
    res.status(201).json({message: 'mascotas agregadas', pet})
})

export default router;
