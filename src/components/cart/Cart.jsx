import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import './Cart.css'
import { Link } from 'react-router'

function Cart() {
  const {cart, setCart} = useContext(CartContext)
  const[paymentView, setPaymentView] = useState(false)

  useEffect(()=>{
    if (window.location.pathname === '/payment') {
      setPaymentView(true); 
    }

  },[])

  const updateQuantity = (productId, increment) => {
    setCart(
      cart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + increment }
            : item
        )
        .filter((item) => item.quantity > 0) 
    );
  };
  
  return (
    <div className="wrapper2">
    <div className="cartDesign">
    <h2>Cart</h2>
    {(cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image}/>
          <p>{item.name}</p>
          <p>${item.price}</p>

          {
            !paymentView ? (
              <div>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          </div>
            ) : (
              <span>{item.quantity}</span>
            )
          }

          
        </div>
      ))
    )}
    <h3>
      Total: $
      {cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )}
    </h3>

      {
        !paymentView ? (
          <Link to='payment'>
    <button className='main-btn' type="submit"
    >
    Proceed To Payment
    </button>
    </Link>
        ) : (
          <Link to='/'>
    <button className='main-btn' type="submit"
    >
      Go Back To Shopping
    </button>
    </Link>
        )
      }

    
    </div>
  </div>
  )
}

export default Cart
