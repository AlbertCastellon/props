import './App.css'
import { useEffect, useState } from 'react'
import Task from './components/Task'
import AddTaskForm from './components/AddTaskForm'


const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);
  const [task, setTask] = useState('')

 const newTask = (task) => {
    if(!task) {
      return
  }
   setTask(task)

  }
  const addTask = (freshTask) => {
    const newTask = { id: tasks.length +1, text: freshTask, completed: false}
    const taskList = [...tasks, newTask]
    setTasks(taskList)
  }
  
  //useEffect(addTask(task), [task])
  
  return (
    <>
    <h1>Lista de Tareas</h1>
      <AddTaskForm addTask={ addTask }/>
      <Task list={tasks}/>
    </>
  );
};

export default App;
