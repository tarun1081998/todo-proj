import React, { useState } from "react";

const StatusDD = (props) =>{
    const statusList = ["To Do", "In Progress", "Done"]
    const [selectedStatus, setSelectedStatus] = useState(props.status ? props.status : statusList[0])
    const [showItems, setShowItems] = useState(false);

    const selectStatus = (s) =>{
        setSelectedStatus(s);
        setShowItems(false);
    }

    return(
        <div className="dd-container" onClick={()=>setShowItems(!showItems)}>
            <div style={{width:"95px",border:"1px solid",display:"flex", justifyContent:"space-between"}}>{
                selectedStatus}
                <span className="dd-icon">^</span>
            </div>
            {showItems && 
                <div className="dd-items">
                    {statusList.map((s)=>
                        <div onClick={()=>selectStatus(s)} style={{width:"95px",border:"1px solid"}}>
                            {s}
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default StatusDD;