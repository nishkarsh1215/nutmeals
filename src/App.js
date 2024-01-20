import * as React from 'react'
import Navbar from './Navbar'
import Carousel from 'react-bootstrap/Carousel'
import Slider from 'react-slick'
import Homepage from './Homepage'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.css' // Import your custom styles
import Shopnavbar from './Shopnavbar'
import Circle from './Circle'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Front from './Front'
import Shopfront from './Shopfront'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/shop" element={<Shopfront />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
