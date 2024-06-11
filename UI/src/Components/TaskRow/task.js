import React from "react";
import { useDispatch } from "react-redux";
import { deleteTaskAction } from "../../redux/actions/actions";
import delIcon from "../../assets/delete.png";
import StatusDD from "../StatusDD/ststus";

const Task = (props) =>{
    const {taskName, id} = props.task;
    const dispatch = useDispatch();
    const deleteTask = () => {
        dispatch(deleteTaskAction(id))
    }
    return(
        <div className="task-row">
            <span className="task-text">{props.sr}. {taskName}</span>
            <div style={{display:"flex"}}>
                <StatusDD />
                <img src={delIcon} onClick={deleteTask} style={{paddingRight:"25px", cursor:"pointer"}} height="30px" alt=""/>
            </div>
            
        </div>
        

    )
}

export default Task