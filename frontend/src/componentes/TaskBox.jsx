import { useEffect, useState } from "react";
import TaskList from "./TasksList";
import axios from 'axios';


const TaskBox = ()=>{
    const URI = "http://localhost:3000/tasks"
    const [taskInput,setTaskInput] = useState("");
    const [task,setTask] = useState("");

    const addTask = (e)=>{
        //setTask(taskInput);
        //console.log(task)
    }
    const getTasks = async()=>{
        const miTask = await axios.get(`${URI}`);
        setTask(miTask.data.tasks);
        //console.log(miTask.data.tasks)
    }
    useEffect(()=>{
        getTasks();
    },[])
    return (
        <>
            <div>
                <input placeholder="Ingresa tarea" onChange={(e)=>(setTaskInput(e.target.value))} value={taskInput} name="task"></input>
                <button onClick={addTask}>Agregar</button>
            </div>
            <div className="taskList">
                 {
                    task.length > 0 && <TaskList tasks={task}/>
                 }
            </div>
        </>
    )
}

export default TaskBox;