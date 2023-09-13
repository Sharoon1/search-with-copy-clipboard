import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About/About'
import Hero from './Home/Hero'
import Topbar from '../../component/Topbar/Topbar'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
export default function index() {
  return (
    <>
    <Topbar/>
    <Header/>
    <main>

    <Routes>
        <Route path='/'>
            <Route path='/' element={<Hero/>}/>
            <Route path='about' element={<About/>}/>
        </Route>
    </Routes>
    </main>
    <Footer/>
    </>
  )
}
