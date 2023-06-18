import { useState } from 'react'
import NavBar from './components/nav'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/home'
import ContactPage from './components/contact'
import SteepestDescent from './components/steepestDescent'
import About from './components/about'
import Newtons from './components/newtons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/steepestDescent" element={<SteepestDescent/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/newtonsmethod" element={<Newtons/>}/>
      </Routes>
    </>
  )
}

export default App
