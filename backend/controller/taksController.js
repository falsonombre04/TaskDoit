const TaskModel = require("../model/TaskModel");

//creamos una tarea

const createTask = async(req,res)=>{
    try{
        const task = await TaskModel.create(req.body);
        res.status(201).json({myTask:task})
    }catch(error){
        res.status(500).json({error:"Error en la creación de tarea"});
    }
}

module.exports = {
    createTask
}