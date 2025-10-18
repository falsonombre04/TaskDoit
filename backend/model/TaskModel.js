const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    task:{type:String,required:true}
},{timestamps:true});

const TaskModel = mongoose.model("task",taskSchema);
module.exports = TaskModel;