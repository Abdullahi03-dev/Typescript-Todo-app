import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
    import StateContext from "./context/StateContext"
import TodoShow from './components/todotask'
import TodoPage from "./components/TodoPage"


const App = () => {
  return (
    <>
    <StateContext> 
    <Router>
        <Routes>
            <Route element={<TodoPage/>} path='/'/>
            <Route element={<TodoShow/>} path='view'/>
        </Routes>
    </Router>
</StateContext>
    </>
  )
}

export default App


