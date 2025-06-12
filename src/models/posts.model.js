const db = require("../config/db");

const getAll = async () => {
  const sql = "SELECT * FROM posts";
  const [result] = await db.query(sql);
  return result;
};


const create = async ({ titulo, categoria, descripcion, autores_id }) => {
  if (!titulo || !categoria ||  !descripcion || !autores_id) {
    throw new Error("Todos los campos son obligatorios.");
  }
  const sql = `INSERT INTO posts (titulo, categoria, descripcion, autores_id) VALUES (?, ?, ?,?)`;
  const [result] = await db.query(sql, [titulo, categoria, descripcion, autores_id]);
  return result;
};

const getByAutorId = async (autores_id) => {
  const sql = "SELECT * FROM posts WHERE autores_id = ?";
  const [result] = await db.query(sql, [autores_id]);
  return result;
};

module.exports = {
  getAll,
  create,
  getByAutorId
};