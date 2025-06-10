const router = require('express').Router();


app.use('/autores', require('./autores.routes'));
app.use('/posts', require('./posts.routes'));


module.exports = router;