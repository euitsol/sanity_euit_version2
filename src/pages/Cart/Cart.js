import React, { useEffect, useState } from 'react'
import { getStoredCart } from '../../utilities/localstorage'
import './Cart.css'

function Cart() {
    const [cartItem, setCartItem] = useState([]);
    useEffect(()=>{
        setCartItem(getStoredCart())
    }, []);
    console.log(cartItem);
  return (
    <div>
      <div className='cart-title'>
        <p>Cart</p>
      </div>
      hello from cart
    </div>
  )
}

export default Cart
