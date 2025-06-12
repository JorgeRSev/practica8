const postsModel = require('../models/posts.model');

const getAllPosts = async (req, res) => {
  try {
    const posts = await postsModel.getAll();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



const createPost = async (req, res) => {
  const { titulo, categoria, descripcion, autores_id } = req.body;

  if (!titulo || !categoria || !descripcion || !autores_id) {
    return res.status(400).json({
      message: "Faltan datos obligatorios: título, categoría, descripción o autores_id",
    });
  }

  try {
    const nuevoPost = await postsModel.create({ titulo, categoria, descripcion, autores_id });
    res.status(201).json(nuevoPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al crear el post" });
  }
};


module.exports = { getAllPosts, createPost};
