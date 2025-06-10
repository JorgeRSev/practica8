const router = require('express').Router();

const {getAllAutores, createAutor, getAutorById} = require('../../controllers/autores.controller');


router.get('/', getAllAutores);
router.get('/:id', getAutorById);
router.post('/', createAutor)

module.exports = router;