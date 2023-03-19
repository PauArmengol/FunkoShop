const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Configuración de body-parser para analizar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para procesar el formulario de inicio de sesión
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Verificar las credenciales del usuario
  if(email === "usuario@example.com" && password === "contraseña") {
    // Iniciar sesión
    req.session.email = email;
    res.redirect("/bienvenida");
  } else {
    // Mostrar un mensaje de error
    res.send("Correo electrónico o contraseña incorrectos");
  }
});

app.listen(3000, () => console.log("El servidor está en ejecución en el puerto 3000"));



const session = require('express-session');

app.use(session({
  secret: 'secreto',
  resave: false,
  saveUninitialized: true
}));
