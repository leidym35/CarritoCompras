const express = require('express');
const router = express.Router()
const productosController= require('../controllers/productos.controller')
//creacion de rutas
router.get('/productos',productosController.get);

module.exports = router