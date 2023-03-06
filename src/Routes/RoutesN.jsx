import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import Bollywood from '../Pages/Bollywood/Bollywood'
import Fitness from '../Pages/Fitness/Fitness'
import Food from '../Pages/Food/Food'
import Hollywood from '../Pages/Hollywood/Hollywood'
import Home from '../Pages/Home/Home'
import Technology from '../Pages/Technology/Technology'

export default function Routes_n() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
           
            <Route path='/' element=<Home />></Route>
            <Route path='/bollywood' element={<Bollywood />}></Route>
            <Route path='/technology' element={<Technology />}></Route>
            <Route path='/hollywood' element={<Hollywood />}></Route>
            <Route path='/fitness' element={<Fitness />}></Route>
            <Route path='/food' element={<Food />}></Route> 
        </Routes>

       
      </BrowserRouter>
    </div>
  )
}
