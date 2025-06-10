const autor = require("../models/autores.model");

const getAllAutores = async (req, res) => {
  try {
    const autores = await autor.getAll();
    res.json(autores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAutorById = async (req, res) => {
  const { id } = req.params;
  try {
    const datosAutor = await autor.getById(id);
    if (!datosAutor) {
      return res.status(404).json({ error: "Autor not found" });
    }
    res.json(datosAutor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createAutor = async (req, res) => {
  const { nombre, email, imagen } = req.body;

  if (!nombre || !email) {
    return res
      .status(400)
      .json({ message: "Faltan datos obligatorios: nombre y email" });
  }
  try {
    const autorExistente = await autor.getByEmail(email);
    if (autorExistente) {
      return res
        .status(409)
        .json({ message: "Ya existe un autor con ese email" });
    }
    const nuevoAutor = await autor.create({ nombre, email, imagen });
    res.status(201).json(nuevoAutor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al crear el autor" });
  }
};

module.exports = { getAllAutores, createAutor, getAutorById };
