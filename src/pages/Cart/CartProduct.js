import React from 'react'
import './Cartproduct.css'

function CartProduct({course}) {
    console.log(course);
  return (
    <div className='cart-card'>
      <img className='course-img' src={course.image.asset.url}></img>
      <p className='course-name-cart'>{course.course_name}</p>
      <p>{course.course_price}</p>
      <input type="number" id="quantity" name="quantity" min="0" max="100" step="1" value="30" />
      <button className='cart-item-delete-btn'>Delete</button>
    </div>
  )
}

export default CartProduct;
