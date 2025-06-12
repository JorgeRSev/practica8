const db = require("../config/db");

const getAll = async () => {
  const sql = "SELECT * FROM autores";
  const [result] = await db.query(sql);
  return result;
};

const getById = async (id) => {
  const sql = "SELECT * FROM autores WHERE id = ?";
  const [result] = await db.query(sql, [id]);
  return result[0];
};

const getByEmail = async (email) => {
  const sql = "SELECT * FROM autores WHERE email = ?";
  const [result] = await db.query(sql, [email]);
  return result[0];
};

const create = async ({ nombre, email, imagen }) => {
  const sql = `INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)`;
  const [result] = await db.query(sql, [nombre, email, imagen]);
  return result;
};

module.exports = {
  getAll,
  create,
  getById,
  getByEmail
};

