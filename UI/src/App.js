
import { useEffect, useState } from 'react';
import './App.css';
import AddForm from './Components/AddForm/addForm';
import Task from './Components/TaskRow/task';
import { useSelector } from 'react-redux';
import { ALL } from './constants';
import Filter from './Components/Filter/filter';

function App() {
  const allTasks = useSelector(state=>state.tasks.tasks)
  const [tasks, setTasks] = useState(allTasks)
  const [filter, setFilter] = useState(ALL);

  useEffect(()=>{
    setTasks(allTasks.filter(t=> filter !== ALL ? t.status===filter : true))
  },[filter, allTasks])

  return (
    <div className='task-container'>
      <div>
        <AddForm setFilter={setFilter}/>
        <Filter filter={filter} setFilter={setFilter}/>
      </div>
      <div>
        {tasks.map((task,index)=><Task key={task.id} task={task} sr={index+1}/>)}
      </div>
    </div>
    
  );
}

export default App;
