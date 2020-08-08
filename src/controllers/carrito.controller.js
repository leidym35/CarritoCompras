const mySqlConnection = require('../../Database')
const controller = {}
//Registrar un producto al carrito 
controller.add = async (req, res) => {
    try {
        await mySqlConnection.query('SELECT cantidadCar FROM productos WHERE  id=?', [req.params.id], (err, rows) => {
            let cantProduct = JSON.stringify(rows[0].cantidadCar)
            if (cantProduct >= 0) {
                let cant = Number(cantProduct)
                cant = cant + 1
                mySqlConnection.query('UPDATE productos SET carrito=1, cantidadCar = ? WHERE id=?', [cant, req.params.id], (err, rows) => {
                    res.send("Producto agregado al carrito")
                })
            }
            else {
                res.send("El producto no existe")
            }
        })
    }
    catch (e) {
        res.send(e)
    }
}

//Obtener los producto registrados en el carrito
controller.get = async (req, res) => {
    try {
        await mySqlConnection.query('SELECT*FROM productos WHERE carrito=1', (err, rows) => {
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

//Eliminar productos del carrito por cantidad
controller.delete = async (req, res) => {
    try {
        await mySqlConnection.query('SELECT cantidadCar FROM productos WHERE  id=?', [req.params.id], (err, rows) => {
            let cantProduct = JSON.stringify(rows[0].cantidadCar)
            if (cantProduct > 1) {
                let cant = Number(cantProduct)
                cant = cant - 1
                mySqlConnection.query('UPDATE productos SET cantidadCar = ? WHERE id=?', [cant, req.params.id], (err, rows) => {
                    res.send("Se eliminó correctamente")
                })
            }
            else if (cantProduct == 1) {
                let cant = Number(cantProduct)
                cant = cant - 1

                mySqlConnection.query('UPDATE productos SET carrito=0, cantidadCar = ? WHERE id=?', [cant, req.params.id], (err, rows) => {
                    res.send("Se eliminó correctamente")
                })
            }
            else {
                res.send("El producto no existe")
            }
        })
    }
    catch (e) {
        res.send(e)
    }

}


module.exports = controller;