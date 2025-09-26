const mongoose = require("mongoose");
const connectDB = async (URI)=>{
    try{
        await mongoose.connect(URI);
        console.log("Conexión con la BBDD");
    }catch(error){
        console.log("Error en la conexión con la BBDD:",error.message);
    }
}

module.exports = connectDB