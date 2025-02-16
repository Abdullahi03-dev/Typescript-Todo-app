// import {FC, useState,ChangeEvent} from "react";
import { ITask } from "../interface";

interface props{
    task:ITask;
    completeTask(tasknameToDelete:string):void;
}

const TodoShow=({task,completeTask}:props)=>{
    return(
        <>
        <div className="showtask">
        <h3>{task.taskname}</h3>
        <h3>{task.deadline}</h3>
        <button onClick={()=>{completeTask(task.taskname)}}>DELETE</button>
        </div>
        </>
    )

}
export default TodoShow;

