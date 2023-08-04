import Header from "./components/Header";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";
import { useState } from "react"; 

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Comprar mantimentos',
      day: '08/07 - 10:00',
      reminder: true,
    },
    {
      id: 2,
      text: 'Estudar React',
      day: '09/07 - 15:30',
      reminder: true,
    },
    {
      id: 3,
      text: 'Fazer exercícios',
      day: '10/07 - 09:00',
      reminder: false,
    },
    {
      id: 4,
      text: 'Enviar relatório',
      day: '11/07 - 14:20',
      reminder: false,
    },
  ])

  // deleteTaks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id 
      ? {...task, reminder: !task.reminder }
      : task
    ))
  }

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <main className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      <TasksList tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </main>
  );
}

export default App;
