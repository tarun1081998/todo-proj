import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskAction } from "../../redux/actions/actions";
import { v4 as uuidv4 } from 'uuid';
import addIcon from "../../assets/add.png";

const AddForm = (props) =>{
    const [taskName, setTaskname] = useState('');
    const dispatch = useDispatch()
    
    const addTask = () => {
        dispatch(addTaskAction({taskName: taskName, id : uuidv4()}));
        setTaskname('');
    }
    
    return(
        <div className="form-container">
            <input value={taskName} onChange={(e)=>setTaskname(e.target.value)} className="task-input"/>
            <img src={addIcon} onClick={addTask} height="20px" className="add-icon" style={{cursor:"pointer"}}/>
        </div>
    )
}

export default AddForm;