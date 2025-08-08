import React, { useState } from 'react'
import Navbar from './Components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Orders from './pages/Orders/Orders'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'

const App = () => {
  const [showLogin,setShowLogin] = useState(false)
   return (
    <>
    {showLogin?<Login  setShowLogin = {setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin = {setShowLogin}/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Orders/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App