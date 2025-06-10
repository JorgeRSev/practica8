const router = require('express').Router();


app.use('/autores', require('./api/autores.routes'));
app.use('/posts', require('./api/posts.routes'));


module.exports = router;