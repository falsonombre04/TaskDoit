const express = require("express");
const router = express.Router();
const {createTask} = require("../controller/taksController");

router.get("/",(req,res)=>{
    res.send("Desde otra ruta......");
});

//crear task
router.post("/",createTask);


module.exports = router;