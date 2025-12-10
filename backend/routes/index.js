const express = require("express");
const router = express.Router();
const {createTask,
    getTasks,
    getTask,
    updateTasks
} = require("../controller/taksController");

//Obtener tareas 
router.get("/",getTasks);
router.get("/task/:id",getTask);
//crear task
router.post("/",createTask);
//update task
router.put("/task/:id",updateTasks);


module.exports = router;