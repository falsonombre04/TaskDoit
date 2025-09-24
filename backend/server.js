const express = require("express");
const app =  express();
const router = require("./routes/index");

app.use("/tasks",router);

app.listen(3000,()=>{
    console.log("Ejecutando en el puerto 3000");
});

