// import {FC, useState,ChangeEvent} from "react";
// import { ITask } from "../interface";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { UseState } from "../context/StateContext";



const TodoShow=()=>{
const {completeTask,task}=UseState()





    return(
        <>
        <div className="dark">
        <div className="container fade-in">
    <h1>📋 Your Tasks</h1>
    <ul className="todo-list">
        {task.map((gottenTask,key)=>(
            <span>
                <li key={key}>🚀 {gottenTask.taskname}</li>
                <h3>{gottenTask.deadline==0?'No DeadLine Days':'THE DEADLINE IS  '+''+  gottenTask.deadline +'  DAYS'}</h3>
            <button key={gottenTask.taskname} onClick={()=>{
                completeTask(gottenTask.taskname)
      toast.error('Deleted a Task')
                }}>DELETE</button>
            </span>
            
        ))}
    </ul>
  </div>
            
            
            <nav className="bottom-nav">
    <Link to={'/'}>➕ Add</Link>
    <Link to={'view'} className="active">📋 Todos</Link>
  </nav>
        </div>
        







        {/* <div className="showtask">
        <h3>{task.taskname}</h3>
        <h3>{task.deadline}</h3>
        <button onClick={()=>{completeTask(task.taskname)}}>DELETE</button>
        </div> */}
        </>
    )










}
export default TodoShow;

