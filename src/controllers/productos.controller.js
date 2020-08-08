const mySqlConnection = require('../../Database')
const controller = {}
//Obtener los productos registrados en la base de datos
controller.get = async (req, res) => {
    try {
        await mySqlConnection.query('SELECT id, imagen, nombre, precio, categoria FROM productos', (err, rows) => {
            if (!err) {
                res.json(rows)
            }
            else {
                console.log(err)
            }
        });
    }
    catch (e) {
        res.send(e)
    }
}

module.exports = controller;