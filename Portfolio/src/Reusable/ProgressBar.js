import React from "react";
import { ProgressBar } from "react-bootstrap";
 
const ProgressBarItem = ({skillName , progress}) =>{
    return (
        <div className="progress-bar-item">
            <span>
                {skillName}
            </span>
            <ProgressBar now={progress} label={`${progress}%`}></ProgressBar>
        </div>
    )
}
export default ProgressBarItem;