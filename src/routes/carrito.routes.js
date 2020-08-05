const express = require('express');
const router = express.Router()
const carritoController= require('../controllers/carrito.controller')
//creacion de rutas
router.get('/carritoadd/:id',carritoController.add);
router.get('/carrito',carritoController.get);
router.get('/carritodelete/:id',carritoController.delete)

module.exports = router