import { useEffect, useState } from 'react';
import './index.css'
const Todolist=()=>{

    const [taskAdd,settaskAdd] = useState("")

    const [tasks,setTasks] = useState([
    
    ])

    const handleTask=(e)=>{
        settaskAdd(e.target.value)
    }

    const handleAddTask=()=>{
        const newTask = {
          id: Date.now(),
          taskName: taskAdd,
          dateTime: new Date().toLocaleString(),
        };
        
        setTasks([...tasks, newTask]);
        settaskAdd("");
        
    }

    useEffect(() => {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    }, []);


    const  handleSave=()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    console.log(tasks.length,"kapil")

    return (
      <div className="todo-list-main-container">
        <div className="todo-list-sub-container">
          <h1>Todos</h1>
          <div className="todo-list-input-container">
            <input
              type="text"
              placeholder="Add Your Todos"
              className="todo-list-input"
              onChange={handleTask}
              required
              value={taskAdd}
            />
            <button className="add-button" onClick={handleAddTask}>
              Add
            </button>
          </div>
        </div>
        <div className="my-tasks-container">
          <h1 className="my-task-heading">My Tasks</h1>
          {tasks.length > 0 &&
            tasks.map((eachTask) => (
              <div className="task-name-container" key={eachTask.id}>
                <div className="checkbox-container">
                  <input type="checkbox" className="checkbox" />
                  <h1 className="task-name">{eachTask.taskName}</h1>
                </div>
                <p className="task-time">{eachTask.dateTime}</p>
              </div>
            ))}
          <button className="add-button" onClick={handleSave}>Save</button>
        </div>
      </div>
    );
}
export default Todolist