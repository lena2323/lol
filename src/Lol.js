import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../src/Components/Navbar/Navbar'
import Footer from '../src/Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Champions from './Pages/Champions/Champions'
import Synergies from './Pages/Synergies/Synergies'
import Lore from './Pages/Lore/Lore'

export default function Lol() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/champions' element={<Champions />} />
          <Route path='/synergies' element={<Synergies />} />
          <Route path='/lore' element={<Lore />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}
