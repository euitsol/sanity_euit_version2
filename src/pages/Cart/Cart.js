import React, { useEffect, useState } from 'react'
import useCourses from '../../Hooks/useCourses';
import { getStoredCart } from '../../utilities/localstorage'
import Loading from '../Loading/Loading';
import './Cart.css'
import CartProduct from './CartProduct';

function Cart() {
  const [courses, loading, error, course_prod] = useCourses();
  const [cart, setCart] = useState([])
  useEffect(()=>{
    const cartitem = getStoredCart();
    const savedCart = []
    for (const slug in cartitem){
      const addedData = course_prod?.find(course=>course?.slug?.current === slug)
      if(addedData){
        const qty = cartitem[slug];
        addedData.quantity = qty;
        savedCart.push(addedData)
      }
      setCart(savedCart);
    }
        
    }, [course_prod]);
    if(loading){
      return <Loading></Loading>
    }

  return (
    <div>
      <div className='cart-title'>
        <p>Cart</p>
      </div>
      <div className='cart-items'>
        {
          cart.map((course, i)=><CartProduct key={i} course={course}></CartProduct>)
        }
      </div>
    </div>
  )
}

export default Cart
