
const TaskList = ({tasks,runDelete,runUpdate})=>{
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
                        tasks.length > 0 && tasks.map((myTask)=>(
                            <tr key={myTask._id}>
                                <td>{myTask.task}</td>
                                <td>
                                    <button name="eliminar" onClick={()=>(runDelete(myTask._id))}>Eliminar</button>
                                    <button name="modificar" onClick={()=>(runUpdate(myTask._id))}>Modificar</button>
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