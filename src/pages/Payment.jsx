import React from 'react'
import "./Payment.css"
import Cart from '../components/cart/Cart'

function Payment() {
  return (
    <div className='payment-wrapper'>
      <div className='payment-wrapper2'>
        <div className='payment-details'>
       <h1>Payment Details</h1>
        </div>
        <div className='form-class'>
          <form action="#">
            <label htmlFor="">Enter Your Card Number:</label>
            <input
            type="number"
            placeholder='Card Number'
            id="" />
             <label htmlFor="">Enter Your Card's Expiry Date:</label>
            <input
            type="number"
            placeholder='Expiry Date'
            id="" />
            <label htmlFor="">Enter Your CVV Number:</label>
            <input
            type="number"
            placeholder='CVV'
            id="" />
          </form>
          <button type="submit">Confirm Payment</button>
        </div>
      </div>
      <div className='cart'>
      <Cart/>
      </div>
    </div>
  )
}

export default Payment
