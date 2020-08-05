const mySqlConnection = require('../../Database')
const controller = {}
//Obtener los productos registrados en la base de datos
controller.get = (req, res) => {
    mySqlConnection.query('SELECT imagen, nombre, precio, categoria FROM productos', (err, rows) => {
        if (!err) {
            res.json(rows)
        }
        else {
            console.log(err)
        }
    });
}

module.exports = controller;