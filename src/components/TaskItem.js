import { FaTimes } from 'react-icons/fa'

const TaskItem = ({ task, onDelete, onToggle  }) => {
  const id = task.id
  const checkReminderClass = task.reminder ? 'reminder' : ''

  return (
    <div className={`task ${checkReminderClass}`} onDoubleClick={() => onToggle(id)}>
      <h3>{task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(id)} /></h3>  
      <p>{task.day}</p>
    </div>
  )
}

export default TaskItem 