import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Goals } from './pages/Goals'
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Goals/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App