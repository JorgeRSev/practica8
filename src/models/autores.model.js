const db = require('../config/db');

const getAll = async () => { 
  const sql = 'SELECT * FROM autores';
   const [result] = await db.query(sql)
   return result;
}


const create = async ({ nombre, email, imagen }) => {
  const sql = `INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)`;
  const [result] = await db.query(sql, [nombre, email, imagen]);
  return result;
}





/*
  crear un autor
  actualizar un autor
  eliminar un autor
  recuperar un autor por id
*/


/*
  recuperar todos los posts
  recuperar todos los posts de un autor
  crear un post
  actualizar un post
  eliminar un post
  recuperar un post por id
*/

module.exports = {
  getAll, create
}