const express = require('express');

// Crea una instancia de la aplicación Express
const app = express();

// Define las rutas y los controladores
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
  });

  
// Agrega más rutas y controladores según las necesidades de tu aplicación

// Puerto en el que el servidor escucha las solicitudes
const PORT = 3000;


// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express.js en funcionamiento en el puerto ${PORT}`);
  });



/* ------------------- CONFIGURACION DE LA BASE DE DATOS MYSQL ---------------------------- */

const mysql = require('mysql');

// Configura los detalles de la conexión
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'funkoshop',
});


// Conecta con la base de datos
connection.connect((error) => {
    if (error) {
        console.error('Error al conectar con la base de datos: ', error);
}   else {
    console.log('Conexión exitosa con la base de datos');
}
});

//Consulta para obtener todos los datos de la tabla
connection.query('SELECT * FROM productos', (error, results) => {
    if (error) {
      console.error('Error al obtener los productos: ', error);
    } else {
      console.log('Productos:', results);
    }
  });


// Cerrar la conexion a la base de datos
connection.end();


