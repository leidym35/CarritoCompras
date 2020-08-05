const express = require('express');
const app = express()
const compression = require('compression')

//Middlewares
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//Modulos
app.use(require('./src/routes/productos.routes'))
app.use(require('./src/routes/carrito.routes'))

//Se levanta el servidor 
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), () => {
    console.log("port listen ", app.get('port'))
})