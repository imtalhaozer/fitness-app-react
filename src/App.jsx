import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import {SideBar} from './components/SideBar'
import { Aim } from './pages/Aim'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SideBar/>} />
        <Route path='/hedef' element={<Aim/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App