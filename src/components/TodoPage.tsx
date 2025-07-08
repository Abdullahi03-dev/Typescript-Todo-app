// import { useState } from 'react'
import {FC, useState,ChangeEvent, useEffect} from "react";
import {ITask} from '../interface'
import { UseState } from "../context/StateContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
// import TodoShow from "./components/todotask";

const TodoPage:FC = ()=>{
  const {setTaskss}=UseState()
  const [task,setTask]=useState<string>('')
  const [deadline,setDeadline]=useState<number>(0)
  const [todoList,setTodoList]=useState<ITask[]>(()=>{const saved=localStorage.getItem('todoItem')
  return saved?JSON.parse(saved):[]})
  const [savedTodo,setSaveTodo]=useState<ITask[]>([])

useEffect(()=>{
  localStorage.setItem('todoItem',JSON.stringify(todoList))
  setSaveTodo(todoList)
  setTaskss(todoList)
  },[todoList])

useEffect(()=>{
  const gottenSave=localStorage.getItem('todoItem')
    if(todoList.length!==0&&gottenSave){
    localStorage.setItem('todoItem',JSON.stringify(todoList))
    }
  },[task])
  
 



  const handleChange=(event:ChangeEvent<HTMLInputElement>):void=>{
    if(event.target.name==='task'){
      setTask(event.target.value)
    }else{
      setDeadline(Number(event.target.value))
    }
  }


 
  const addTask=():void=>{
    if(task){
      const newTask={taskname:task,deadline:deadline}
      setTodoList([...todoList,newTask])
      toast.success('Successfully Added Task')
      setDeadline(0)
      setTask('')
    }else{
      toast.error('Fill Inputs')
    }
   
  }
  



 
  return(
    
    

<div className=" dark">

    <div className="container fade-in">
    <h1>📝 Add a Task</h1>
  <input type="text" placeholder="WRITE TODO" name="task" value={task} onChange={handleChange} />
  <input type="number" placeholder="Days DEADLINE" name="deadline" value={deadline} onChange={handleChange}/>
  <button onClick={addTask}>INSERT</button>
  </div>
  
  
  
  <nav className="bottom-nav">
  <Link to={'/'} className='active'>➕ Add</Link>
    <Link to={'view'}>📋 Todos</Link>
  </nav>
    </div>
 



      
  
  )
  
}


      {/* <div className="result">
        {savedTodo.map((task:ITask,key:number)=>{
          return <TodoShow key={key} task={task} completeTask={completeTask}/>
})}
      </div> */}
export default TodoPage
