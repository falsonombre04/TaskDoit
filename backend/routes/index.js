const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Desde otra ruta......");
});


module.exports = router;