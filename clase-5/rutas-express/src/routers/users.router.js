import { Router } from "express";

const router = Router();

const users = [];

//metodos GET para obtener los arreglos completos de usuarios

router.get('/', (req,res)=>{
    res.json(users)
})

//agregar usuario

router.post('/', (req,res)=>{
    const user = req.body;
    users.push(user)
    res.status(201).json({message: "usuario agregado", user})
})

export default router;