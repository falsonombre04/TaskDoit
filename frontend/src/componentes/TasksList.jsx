
const TaskList = ({tasks})=>{
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
                                    <button>Eliminar</button>
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