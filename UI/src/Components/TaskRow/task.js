import React from "react";
import { useDispatch } from "react-redux";
import { deleteTaskAction } from "../../redux/actions/actions";
import delIcon from "../../assets/delete.png";

const Task = (props) =>{
    const {taskName, id} = props.task;
    const dispatch = useDispatch();
    const deleteTask = () => {
        dispatch(deleteTaskAction(id))
    }
    return(
        <div className="task-row">
            <span className="task-text">{taskName}</span>
            <img src={delIcon} onClick={deleteTask} style={{paddingRight:"25px", cursor:"pointer"}} height="30px"/>
        </div>
        

    )
}

export default Task