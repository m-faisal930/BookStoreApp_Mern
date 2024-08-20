import React from 'react'
import Home from './home/home'
import { Route, Routes } from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './components/Sinup'
import Contact from './contact/Contact'




export default function App() {
  return (
    <div>
      
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Courses />} />
        <Route path='/sinup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>

</div>


    </div>
  )
}


