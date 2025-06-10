const router = require('express').Router();

const {getAllAutores, createAutor} = require('../../controllers/autores.controller');


router.get('/', getAllAutores);
router.post('/', createAutor)

module.exports = router;