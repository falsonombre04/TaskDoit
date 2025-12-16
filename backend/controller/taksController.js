const { default: mongoose, mongo } = require("mongoose");
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
        res.status(200).json({tasks});
    }catch(error){
        res.status(500).json({
            error:'Error en obtener tareas'
        })
    }
}

const getTask = async (req,res)=>{
    try{
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                ok:false,
                message:"El id enviado NO tiene un formato válido"
            })
        }
        const task = await TaskModel.findById(id);
        if(!task){
            return res.status(400).json({
                ok:false,
                message:"id en formato no valido."
            })
        }
        res.status(200).json({
            ok:true,
            task
        })
    }catch(error){
        res.status(500).json({
            ok:false,
            error:'Error en obtener la tarea solicitada'
        })
    }
}

const updateTasks = async (req,res)=>{
    try{
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(400).json({
                    ok:false,
                    error:"formato invalido id"
                })
            }
        const task = await TaskModel.findByIdAndUpdate(id,
        {task:req.body.task},
        {new:true});
        res.status(200).json({
            ok:true,
            task
        })
    }
    catch(error){
        res.status(500).json({
            ok:false,
            error:'Error en modificar task'
        })
    }
}

const deleteTaskById = async (req,res)=>{
    try{
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
           return  res.status(400).json({
                ok:false,
                message:"formato id invalido"
            })
        }
        const task = await TaskModel.findByIdAndDelete(id);
        if(!task){
            return res.status(404).json({
               ok:false,
               message:"no se encontro tarea" 
            })
        }
        res.status(200).json({
            ok:true,
            message:"Tarea eliminada"
        })
    } catch(error){
        res.status(500).json({
            ok:false,
            message:"Error en eliminar tarea"
        })
    }
}
module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTasks,
    deleteTaskById
}