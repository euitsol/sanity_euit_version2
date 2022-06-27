import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useCourses from '../../Hooks/useCourses';
import { decreaseValue, getStoredCart, increaseValue, removeFromDb } from '../../utilities/localstorage'
import Loading from '../Loading/Loading';
import './Cart.css'

function Cart() {
  const [courses, loading, error, course_prod] = useCourses();
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    const cartitem = getStoredCart();
    const savedCart = [];
    for (const slug in cartitem){
      const addedData = course_prod?.find(course=>course?.slug?.current === slug);
      let qty = cartitem[slug];
      if(addedData){
        addedData.quantity = qty;
        savedCart.push(addedData);
      }
      setCart(savedCart);
    }
        
  }, [course_prod]);


  if(loading){
    return <Loading></Loading>
  }

  // delete from cart 
  const deleteHandler = slug=>{
    removeFromDb(slug)
    const remainingData = cart.filter(cartitem=> cartitem.slug.current !== slug);
    setCart(remainingData);
  }
  // calculate total bill
  let totalBill = cart.reduce(function(prev, current) {
    return prev + +current.course_price
  }, 0);

  if(cart.length < 1){
    return <p>cart is empty</p>
  }

  return (
    <div>
      <div className='cart-title'>
        <p>Cart</p>
      </div>
        <div className='cart-items'>
          {
            cart.map((course, i)=><div key={i} className='cart-card'>
            <img className='course-img' src={course.image.asset.url}></img>
              <p className='course-name-cart'>{course.course_name}</p>
            <div className='middle-section'>
              <div className='quantity-delete'>
                <div className='qunatity'>
                
                    <button onClick={() => deleteHandler(course.slug.current)} className='cart-item-delete-btn'>Remove</button>
                </div>
              </div>
            </div>
            <p>${course.course_price}</p>
          </div>)
          }
          <p className='total-bill'>total ${totalBill}</p>
        </div>
        <div className='checkout'>
          <Link className='checkout-btn' to='/cart/checkout'><a>Click to Checkout</a></Link>
        </div>
    </div>
  )
}


export default Cart
