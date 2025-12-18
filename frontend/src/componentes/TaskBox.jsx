import { useState } from "react";

const TaskBox = ()=>{
    const [task,setTask] = useState("");

    const addTask = (e)=>{
        console.log(task);
        setTask("");
    }
    return (
        <>
            <div>
                <input placeholder="Ingresa tarea" onChange={(e)=>(setTask(e.target.value))} value={task} name="task"></input>
                <button onClick={addTask}>Agregar</button>
            </div>
        </>
    )
}

export default TaskBox;