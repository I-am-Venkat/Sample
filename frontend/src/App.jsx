import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Home from './Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <p>Hi</p> */}
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Home" element={<Home/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
