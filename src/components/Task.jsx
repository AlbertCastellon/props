import { useState } from 'react'

function Task( {list} ) {
    const [tasks, setTasks] = useState([...list])

    const isCompleted = (e) => {
        return e.completed ? 'completed' : 'pending'
    }

    const scratch = (task, taskIndex) => {
        const changedTask = task
        if(task.completed){
            changedTask.completed = false
        }else{
            changedTask.completed = true
        }
        list.splice(taskIndex, 1, changedTask)
        setTasks([...list])
    }
    const deleteTask = (taskIndex) => {
        const tasksList = [...list]
        tasksList.splice(taskIndex, 1);
        setTasks([...tasksList])
    }
    return (
        <>

            <ul>
                {list.map((element, i) => {
                    return (
                    <li key={element.id}><span className={isCompleted(element)}>{element.text}</span>
                    <button onClick={() => scratch(element, i)}>Hecho</button>
                    <button onClick={() => deleteTask(i)}>Eliminar</button></li>
                    )
                })}
            </ul>
        </>
    )
}

export default Task

