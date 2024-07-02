import { useState, useEffect } from 'react'

function AddTaskForm( {addTask} ) {

    const [task, setTask] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(task)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
              <label htmlFor="newTask">Nueva Tarea: </label>
              <input type="text" id="newTask" placeholder="Introduce la tarea" value={task} onChange={e => setTask(e.target.value)}/>  
              <input type="submit" value='Añadir' />
            </form>
        </>
    )
}

export default AddTaskForm