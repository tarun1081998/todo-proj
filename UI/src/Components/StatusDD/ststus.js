import React, { useState } from "react";
import { TO_DO, IN_PROGRESS, DONE } from "../../constants";
import { useDispatch } from "react-redux";
import { updateTaskAction } from "../../redux/actions/actions";

const StatusDD = (props) =>{
    const [selectedStatus, setSelectedStatus] = useState(props.task.status ? props.task.status : TO_DO);
    const dispatch = useDispatch();

    const selectStatus = (s) =>{
        setSelectedStatus(s);
        dispatch(updateTaskAction({...props.task,status:s}))
    }

    return(
        <div className="dd-container"> 
            <select value={selectedStatus} onChange={(e) => selectStatus(e.target.value)}>
                <option value={TO_DO}>To-do</option>
                <option value={IN_PROGRESS}>In Progress</option>
                <option value={DONE}>Done</option>
            </select>
        </div>
        
    )
}

export default StatusDD;