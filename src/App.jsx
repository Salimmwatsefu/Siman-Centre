import { useState } from 'react'
import navLogo from './assets/logo1.png'
import './App.css'
import Navbar from './components/Home/Navbar'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'

function App() {
 

  return (
    <div>

      <Navbar />
      

      <Routes>
        <Route index path='/' element={<Home />} />
        <Route index path='/about' element={ <About /> } />
      </Routes>

    </div>
  )
}

export default App
