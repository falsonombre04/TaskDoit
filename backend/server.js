const express = require("express");
const app =  express();
const dotenv =  require("dotenv").config();
const router = require("./routes/index");
const PORT = process.env.PORT;

app.use("/tasks",router);

app.listen(PORT,()=>{
    console.log(`Ejecutando en el puerto ${PORT}`);
});

