// importamos el archivo app
const dotenv =  require("dotenv").config();
const connectDB = require("./config/db"); // conexión con la BBDD
const app =  require("./app.js"); 
// Variables de entorno
const PORT = process.env.PORT;
const MONGO_URI =  process.env.MONGO_URI;

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

