import { Router } from "express";
import {
    getPet,
    createPet,
    updatePet,
    deletePet,
    getPets
} from "../controllers/pets.controller.js";
const router = Router();


router.get('/pets', (req, res) => res.send('Todas las mascotas'))
router.get('/pets/:id', (req, res) => res.send('Obtener mascota'))
router.post('/pets', (req, res) => res.send('Creando las mascotas'))
router.put('/pets/:id', (req, res) => res.send('Actualizando las mascotas'))
router.delete('/pets/:id', (req, res) => res.send('Eliminando las mascotas'))


router.get('/pets', getPets)
router.get('/pets/:id', getPet)
router.post('/pets',createPet)
router.put('/pets/:id', updatePet)
router.delete('/pets/:idid', deletePet)




export default router;
