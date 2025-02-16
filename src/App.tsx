// import { useState } from 'react'
import {FC, useState,ChangeEvent} from "react";
import './App.css'
import {ITask} from './interface'
import TodoShow from "./components/todotask";

const App:FC = ()=>{
  const [task,setTask]=useState<string>('')
  const [deadline,setDeadline]=useState<number>(0)
  const [todoList,setTodoList]=useState<ITask[]>([])

  const handleChange=(event:ChangeEvent<HTMLInputElement>):void=>{
    if(event.target.name==='task'){
      setTask(event.target.value)
    }else{
      setDeadline(Number(event.target.value))
    }
  }

  const addTask=():void=>{
    const newTask={taskname:task,deadline:deadline}
    setTodoList([...todoList,newTask])
    console.log(todoList)
    setDeadline(0)
    setTask('')
  }

  const completeTask=(tasknameToDelete:string):void=>{
    setTodoList(todoList.filter((task)=>{
      return task.taskname!=tasknameToDelete
    }))
  }
  return(
    <>
    <div className="container">
      <div className="controllers">
        <input type="text" placeholder="WRITE TODO" name="task" value={task} onChange={handleChange} />
        <input type="number" placeholder="deadline" name="deadline" value={deadline} onChange={handleChange}/>
        <button onClick={addTask}>INSERT</button>
      </div>
      <div className="result">
        {todoList.map((task:ITask,key:number)=>{
          return <TodoShow key={key} task={task} completeTask={completeTask}/>
})}
      </div>
    </div>
    </>
  )
}

export default App
