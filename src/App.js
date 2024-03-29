import React from 'react'
import About from './components/About'
import Customer from './components/Customer'
import Download from './components/Download'
import FoodMenu from './components/FoodMenu'
import Footer from './components/Footer'
// import FoodMenuOpen from './components/FoodMenuOpen'
import Home from './components/Home'
import Navbar from './components/Navbar'
import News from './components/News'
import Reviews from './components/Reviews'

export default function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Reviews/>
  {/* <FoodMenuOpen/> */}
  <FoodMenu/>
  <Customer/>
  <Download/>
  <About/>
  {/* <Footer/> */}
  {/* <News/> */}
    </div>
  )
}
