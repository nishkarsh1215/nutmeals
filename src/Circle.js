import React from 'react'
import './Circle.css' // Make sure to use the correct CSS file

const ImageGrid = () => {
  const imageInfo = [
    { src: '/images/products.png', text: 'Nuts' },
    { src: '/images/products.png', text: 'Almonds' },
    { src: '/images/products.png', text: 'Cashew' },
    { src: '/images/products.png', text: 'kiwi' },
    { src: '/images/products.png', text: 'Cashew' },
    { src: '/images/products.png', text: 'Cashew' },
    { src: '/images/products.png', text: 'Cashew' },
    { src: '/images/products.png', text: 'Cashew' },
    { src: '/images/products.png', text: 'Cashew' },
    { src: '/images/products.png', text: 'Cashew' },
  ]

  return (
    <div className="image-grid">
      {imageInfo.map(({ src, text }, index) => (
        <div key={index} className="image-container">
          <img
            src={src}
            alt={`Image ${index + 1}`}
            className="circular-image"
          />
          <p className="image-text">{text}</p>
        </div>
      ))}
    </div>
  )
}

export default ImageGrid
