import React, { useEffect, useState } from 'react'
import useCourses from '../../Hooks/useCourses';
import { getStoredCart, removeFromDb } from '../../utilities/localstorage'
import Loading from '../Loading/Loading';
import './Cart.css'

function Cart() {
  const [courses, loading, error, course_prod] = useCourses();
  const [cart, setCart] = useState([]);
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

    // delete from cart 
    const deleteHandler = (slug)=>{
      removeFromDb(slug)
      const remainingData = cart.filter(cartitem=> cartitem.slug.current != slug);
      setCart(remainingData);
    }
    // var totalPrice = 0
    // cart?.forEach(element => {
    //   setTotalBill(totalPrice += element.course_price)
    // });
    // console.log(totalBill)
    let totalBill = cart.reduce(function(prev, current) {
      return prev + +current.course_price
    }, 0);

  return (
    <div>
      <div className='cart-title'>
        <p>Cart</p>
      </div>
        <div className='cart-items'>
        {
          cart.map((course, i)=><div className='cart-card'>
          <img className='course-img' src={course.image.asset.url}></img>
          <div className='middle-section'>
            <p className='course-name-cart'>{course.course_name}</p>
            <div className='quantity-delete'>
              <input type="number" name="quantity" min='1' max='10' value={course.quantity} ></input>
              <button onClick={() => deleteHandler(course.slug.current)} className='cart-item-delete-btn'>Delete</button>
            </div>
          </div>
          <p>${course.course_price}</p>
        </div>)
        }
        <p className='total-bill'>total ${totalBill}</p>
        </div>
    </div>
  )
}

export default Cart
