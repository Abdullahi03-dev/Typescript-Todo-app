import {useState,useContext,createContext,ReactNode} from 'react'
import {ITask} from '../interface'

interface ITaskProp{
    completeTask:(complete:string)=>void
    task:ITask[];
    setTaskss:(task:any)=>void

    todoList:ITask[];
    setTodoList:(todoList:any)=>void
}

interface ArgumentProps{
    children:ReactNode;
    // setComplete:(complete:string)=>void
}


const StateContexts=createContext<ITaskProp|undefined>(undefined)


const StateContext:React.FC <ArgumentProps> = ({children}) => {
    const [task,setTaskss]=useState<ITask[]>(()=>{const saved=localStorage.getItem('todoItem')
    return saved?JSON.parse(saved):[]})


    const [todoList,setTodoList]=useState<ITask[]>([])

    const completeTask=(tasknameToDelete:string)=>{
        setTaskss(task.filter((task)=>{
          return task.taskname!=tasknameToDelete
        }))
    
      }
if(task!=null){
        localStorage.setItem('todoItem',JSON.stringify(task))
    }

  return (
    <StateContexts.Provider value={{completeTask,task,setTaskss,todoList,setTodoList}}>
            {children}
    </StateContexts.Provider>
    
  )
}



export const UseState=()=>{
    const context= useContext(StateContexts)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
      }
      return context;
}

export default StateContext