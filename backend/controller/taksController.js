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

const getTasks = async(req,res)=>{
    try{
        const tasks = await TaskModel.find();
        res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({
            error:'Error en obtener tareas'
        })
    }
}

module.exports = {
    createTask,
    getTasks
}