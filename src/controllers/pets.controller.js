import { pool } from "../db.js";


export const getPets = async (req, res) => {
    const result = await pool.query('SELECT * FROM pets')
    console.log(result);
    res.send('Obtener mascotas')
};

export const getPet    = (req, res) => res.send('Obtener mascota')
export const createPet = (req, res) => res.send('Creando las mascotas')
export const updatePet = (req, res) => res.send('Actualizando las mascotas')
export const deletePet = (req, res) => res.send('Eliminando las mascotas')
