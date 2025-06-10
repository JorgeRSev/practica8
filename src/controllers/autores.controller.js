const autor = require('../models/autores.model');

const getAllAutores = async (req, res) => {
    try {
        const autores = await autor.getAll();
        res.json(autores);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const createAutor = async (req, res) => {
    const { nombre, email, imagen } = req.body;
    try {
        const newAutor = await autor.create({ nombre, email, imagen });
        res.json(newAutor);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}




module.exports = { getAllAutores, createAutor }