import React from 'react'
import FoodMenu from './components/FoodMenu'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'

export default function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Reviews/>
    <FoodMenu/>
    </div>
  )
}
