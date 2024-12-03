import { Router } from "express";
import {
    getPet,
    createPet,
    updatePet,
    deletePet,
    getPets
} from "../controllers/pets.controller.js";
const router = Router();


router.get('/pets', getPets)
router.get('/pets/:id', getPet)
router.post('/pets',createPet)
router.put('/pets/:id', updatePet)
router.delete('/pets/:idid', deletePet)




export default router;
