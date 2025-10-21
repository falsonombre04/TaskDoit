// paquetes de nodejs
const express = require("express");
const app =  express(); 
const dotenv =  require("dotenv").config();
const router = require("./routes/index"); // accedemos a los endpoint desde server.js
const connectDB = require("./config/db"); // conexión con la BBDD
// Variables de entorno
const PORT = process.env.PORT;
const MONGO_URI =  process.env.MONGO_URI;

app.use(express.json())

app.use("/tasks",router); // Establecemos la ruta principal


const main = async (URI)=>{ // función que ejecutara el servidor
    try{
        await connectDB(URI);
        app.listen(PORT,()=>{
        console.log(`Ejecutando en el puerto ${PORT}`); 
        });
        
    }catch(error){
        console.log("Error al iniciar servidor:",error.message);
    }
}

main(MONGO_URI);

module.exports = app;

