import React from 'react'
import chai from'../assets/chai.avif'
import "./ProductCard.css"

const ProductCard = (props) => {
  return (
    <div className="product-container">
      <p id='pname'>{props.name}</p>
      
      {/* Apply the passed style prop specifically to the image */}
      <img 
        className='product-img' 
        style={props.imageStyle} 
        src={props.image || chai} // Use passed image or default to chai
        alt={props.name} 
      />
      
      <p id='pdesc'>{props.desc}</p>
    </div>
  )
}
export default ProductCard