const mySqlConnection = require('../../Database')
const controller = {}
//Registrar un producto al carrito 
controller.add = (req, res) => {
    mySqlConnection.query('SELECT cantidadCar FROM productos WHERE  id=?', [req.params.id], (err, rows) => {
        let cantidad = JSON.stringify(rows[0].cantidadCar)
        if (cantidad >= 0) {
            let cant = Number(cantidad)
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

//Obtener los producto registrados en el carrito
controller.get = (req, res) => {
    mySqlConnection.query('SELECT*FROM productos WHERE carrito=1', (err, rows) => {
        if (!err) {
            res.json(rows)
        }
        else {
            console.log(err)
        }
    });
}

//Eliminar productos del carrito por cantidad
controller.delete = (req, res) => {
    mySqlConnection.query('SELECT cantidadCar FROM productos WHERE  id=?', [req.params.id], (err, rows) => {
        let cantidad = JSON.stringify(rows[0].cantidadCar)

        if (cantidad > 1) {
            let cant = Number(cantidad)
            cant = cant - 1
            console.log(cant)
            mySqlConnection.query('UPDATE productos SET cantidadCar = ? WHERE id=?', [cant, req.params.id], (err, rows) => {
                res.send("Se eliminó correctamente")
            })
        }
        else if (cantidad == 1) {
            let cant = Number(cantidad)
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


module.exports = controller;