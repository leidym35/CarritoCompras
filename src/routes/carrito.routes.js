const express = require('express');
const router = express.Router()
const carritoController = require('../controllers/carrito.controller')
//Creacion de rutas
//Agregar producto al carrito 
router.get('/carritoadd/:id', carritoController.add);
//Obtener los productos del carrito 
router.get('/carrito', carritoController.get);
//Eliminar un producto del carrito
router.get('/carritodelete/:id', carritoController.delete)

module.exports = router