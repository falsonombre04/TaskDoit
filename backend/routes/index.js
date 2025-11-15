const express = require("express");
const router = express.Router();
const {createTask,
    getTasks
} = require("../controller/taksController");

//Obtener tareas 
router.get("/",getTasks);

//crear task
router.post("/",createTask);


module.exports = router;