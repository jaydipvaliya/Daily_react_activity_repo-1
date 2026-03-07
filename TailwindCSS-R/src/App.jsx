import { useState } from 'react'
import Landing from './components/Landing.jsx'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
  </>
  )
}

export default App
