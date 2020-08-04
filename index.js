const express = require('express');
const app = express()
const compression = require('compression')

//Middlewares
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//modulos
/* app.use(require('./src/routes/productos.routes'))
app.use(require('./src/routes/UsuarioRegister.routes'))  */

//Se levanta el servidor 
app.set('port',process.env.PORT||3000);

app.listen(app.get('port'),()=>{
    console.log("port listen ",app.get('port'))
})