// O Brad fala de integrar os dados como parte do State do componente. O que é isso? 
// state é imutável. Por isso, as modificações na lista serão feitos a partir de métodos javascript. 
// map, filter, etc.   
// state é one way data. 
// se quiser mudar, é feito com spread operator e muda o que já temos. 

import TaskItem from './TaskItem'

  const TaskList = ({ tasks, onDelete, onToggle }) => {
    
    return (
      <div>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
        ))}
      </div>
    )
  }


  export default TaskList