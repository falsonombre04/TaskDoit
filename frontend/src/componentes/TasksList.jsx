
const TaskList = ({tasks,runDelete})=>{
    const sendId = (id)=>{
        //getId("mi Mensaje");
        runDelete(id);
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.length > 0 && tasks.map((myTask,index)=>(
                            <tr key={index}>
                                <td>{myTask.task}</td>
                                <td>
                                    <button onClick={()=>(sendId(myTask._id))}>Eliminar</button>
                                    <button>Modificar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default TaskList;