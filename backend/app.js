// paquetes de nodejs
const express = require("express");
const router = require("./routes/index"); // accedemos a los endpoint desde server.js
const app =  express();
//Configurando el uso de cors
const cors = require("cors");
app.use(cors());
//Middlewares
app.use(express.json())
//Ruta principal
app.use("/tasks",router); // Establecemos la ruta principal

module.exports = app;