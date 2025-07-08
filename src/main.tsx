import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style.css'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast'
const isMobile=window.innerWidth<=768
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Toaster position='top-left'/>
    {isMobile?(
    <App />
   
    ):(
      <div style={{textAlign:'center',padding:'2rem'}}>


      <h2>This TodoApp Only Works On Mobile Devices</h2>
      <p>Try Resizing your browser or open it in your phone</p>
      </div>


    )}
  </StrictMode>,
)
