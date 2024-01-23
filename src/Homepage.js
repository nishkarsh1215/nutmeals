import * as React from 'react'
import Navbar from './Navbar'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.css' // Import your custom styles

function Homepage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 1000, // Set the interval between slides (in milliseconds)
    vertical: true,
  }
  return (
    <>
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src="./images/firsthead.png" alt="Slide 1" />
          </div>
          <div>
            <img src="./images/secondheader.png" alt="Slide 2" />
          </div>
          <div>
            <img src="./images/thirdheader.png" alt="Slide 3" />
          </div>
        </Slider>
      </div>
      <div class="carousel-container1">
        <div class="carousel-item">
          <img src="./images/products.png" alt="Slide 1" />
          <div class="overlay">
            <p>Products</p>
          </div>
        </div>
      </div>
      <div class="carousel-container1">
        <div class="carousel-item">
          <img src="./images/services.jpg" alt="Slide 1" />
          <div class="overlay">
            <p>Services</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
