const express = require("express");
const router = express.Router();
const {createTask,
    getTasks,
    getTask
} = require("../controller/taksController");

//Obtener tareas 
router.get("/",getTasks);
router.get("/task/:id",getTask);
//crear task
router.post("/",createTask);


module.exports = router;