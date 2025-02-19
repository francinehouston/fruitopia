import { useState } from 'react'
import {Route, Routes} from "react-router"
import './App.css'

import NavBar from './components/NavBar/NavBar.jsx'
import Fruits from './components/Fruits/Fruits.jsx'
import Footer from './components/Footer/Footer.jsx'
import About from "./components/About/About"
import Contact from "./components/Contact/Contact.jsx"
import FruitSearch from "./components/Fruits/FruitSearch/FruitSearch.jsx";




function App() {
 
  

  return (
    <>
      <NavBar />
  <Routes>
    <Route path="/" element={<Fruits />} />
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/search"element={<FruitSearch/>}/>
  </Routes>
      <Footer />
    
    </>
  )
}

export default App;
