
import { First } from "./pages/First.jsx"
import { Second } from "./pages/Second"
import { Routes,Route } from "react-router-dom"
function App() {

  return (
    <>
       
        <Routes>
          <Route path='/' element={<First/>} />
          <Route path='/second' element={<Second/>} />
        </Routes>
        
    </>
  )
}

export default App
