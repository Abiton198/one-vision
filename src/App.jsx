import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Pages/Navbar'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Sermons from './Pages/Sermons'
import Home from './Pages/Home'

export default function App() {

  return (
    <div className='app'>
        <Navbar/>
 
      
            <div className='mt-5 pt-5'>
                    <Routes>
                      <Route exact path='/' element={<Home/>}/>
                      <Route  path='/About' element={<About/>}/>
                      <Route  path='/Projects' element={<Projects/>}/>
                      <Route  path='/Sermons' element={<Sermons/>}/>
                    </Routes>

            </div>
    </div>
  )
}
