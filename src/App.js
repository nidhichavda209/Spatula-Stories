// import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Home from './pages/Home'


const App = () => {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home/>}/> 
          <Route path='/login' element= {<Login/>}/>
          <Route path='/about' element= {<About/>}/>
          <Route path='/contact' element= {<Contact/>}/>
          <Route path='/privacypolicy' element= {<PrivacyPolicy/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App