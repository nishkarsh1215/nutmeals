import React from 'react'
import './Shopnavbar.css' // Import your CSS file or include the styles directly in your component

const Shopnavbar = () => {
  return (
    <div className="container">
      <div className="options">
        <div className="option">Products by Category</div>
        <div className="option">Best Seller</div>
        <div className="option">Combo Deals</div>
      </div>
    </div>
  )
}

export default Shopnavbar
