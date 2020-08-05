const mySqlConnection = require('../../Database')
const controller = {}
//obtener los datos
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