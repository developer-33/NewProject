import { div } from 'framer-motion/client'
import  Sidebar  from './PopOutNav'

// import "./nav.css"

export const Navigation = () => {
  return (
    <div>
    <nav className="flex items-center justify-between px-5 py-2 border-b-2 background-color: rgba(0, 0, 0, 0.5); border-zinc-800">
      <div className="flex items-center gap-3">
        <Sidebar />
        <p>Animated Sidebar</p>
        
      </div>
      </nav>
    </div>
  )
}           
export default Navigation