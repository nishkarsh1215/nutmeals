import React, { useEffect, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.css'

function Homepage() {
  const sliderRef = useRef(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    vertical: true,
  }

  const handleScroll = (event) => {
    const { deltaY } = event

    if (deltaY > 0) {
      // Scrolled down, go to the next slide
      sliderRef.current.slickNext()
    } else if (deltaY < 0) {
      // Scrolled up, go to the previous slide
      sliderRef.current.slickPrev()
    }
  }

  useEffect(() => {
    window.addEventListener('wheel', handleScroll)

    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [])

  return (
    <>
      <div className="carousel-container">
        <Slider ref={sliderRef} {...settings}>
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
