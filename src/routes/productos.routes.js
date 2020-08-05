const express = require('express');
const router = express.Router()
const productosController = require('../controllers/productos.controller')
//Creacion de ruta
router.get('/productos', productosController.get);

module.exports = router