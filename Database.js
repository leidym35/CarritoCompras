const mysql = require('mysql')
require('dotenv').config()

//Se crea la conexion a la BBDD se obtienen los valores del archivo .env
const mysqlConnection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    ssl: true
});

//Se crea la conexion y se valida que haya sido exitosa
mysqlConnection.connect(function (err) {
    if (err) {
        console.error("No se pudo Connectar!", err);
    }
    else {
        console.log("BD Conectada!")
    }
})

module.exports = mysqlConnection;