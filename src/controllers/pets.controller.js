import { pool } from "../db.js";


export const getPets = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM pet')
    res.json(rows)
};

export const getPet = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query('SELECT * FROM pet WHERE id = ?', [id]);

        if (rows.length === 0) {
            return res.status(404).json({ message: "Mascota no encontrada" });
        }

        res.json(rows[0]);
    } catch (error) {
        console.error('Error al obtener la mascota:', error);
        res.status(500).json({ error: "Error al obtener la mascota" });
    }
};



export const createPet = async (req, res) => {
    console.log('el req', req.body)
    const name = req.body.name;
    const type = req.body.type;
    const race = req.body.race;
    const age = req.body.age;
    const consulta = await pool.query('INSERT INTO pet(name, type, race, age) VALUES (?, ?, ?, ?)', [name, type, race, age])
    console.log('La consulta', consulta)
    res.send({
        name,
        type,
        race,
        age,
        id: consulta[0].insertId
    })
}

export const updatePet = async (req, res) => {
    try {
        const { name, type, race, age } = req.body;
        const { id } = req.params;

        // Validación básica
        if (!name || !type || !race || !age) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }

        const [result] = await pool.query(
            'UPDATE pet SET name = ?, type = ?, race = ?, age = ? WHERE id = ?',
            [name, type, race, age, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Mascota no encontrada" });
        }

        res.json({ message: "Mascota actualizada correctamente" });
    } catch (error) {
        console.error('Error al actualizar la mascota:', error);
        res.status(500).json({ error: "Error al actualizar la mascota" });
    }
};



export const deletePet = async (req, res) => {
    const [result] = await pool.query('DELETE FROM pet WHERE id = ?', [req.params.id])
    if( result.affectedRows <= 0 ){
        return res.status(404).json({
            message: 'Pet not found'
        })
    }
    res.sendStatus(204)
}


