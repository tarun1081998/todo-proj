
import './App.css';
import AddForm from './Components/AddForm/addForm';
import Task from './Components/TaskRow/task';
import { useSelector } from 'react-redux';

function App() {
  const tasks = useSelector(state=>state.tasks.tasks)
  return (
    <div className='task-container'>
      <AddForm />
      <div className='task-'>
        {tasks.map((task)=><Task key={task.id} task={task} />)}
      </div>
    </div>
    
  );
}

export default App;
