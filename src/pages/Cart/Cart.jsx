import React, { useContext, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
const Cart = () => {
  const {cartItems,foodList,removeFromCart,getTotalCartAmount} =useContext(StoreContext)
  return (
    <div className='cart'>
      <div className="cart_items">
        <div className="cart_items_title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {foodList.map((items,index)=>{
              if(cartItems[items.id]>0){
                return(
                  <div>

                  <div class="cart_items_title cart_items_item">
                    <img src={items.image} alt=""/>
                    <p>{items.name}</p>
                    <p>{items.price}</p>
                    <p>{cartItems[items.id]}</p>
                    <p>{items.price*cartItems[items.id]}</p>
                    <p className='cross' onClick={()=>removeFromCart(items.id)}>X</p>
                  </div>
                  <hr/>
                  </div>
                )

              }
        })}
      </div>
          <div className="cart_bottom">
            <div className="cart_total">
              <h2>Cart Totals</h2>
              <div>
                <div className="cart_total_detalis">
                  <p>Subtotal</p>
                  <p>{getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="cart_total_detalis">
                  <p>Delivery Fee</p>
                  <p>25</p>
                </div>
                <hr/>
                <div className="cart_total_detalis">
                  <b>Total</b>
                 
                  <b>{getTotalCartAmount()+25}</b>
                </div>
              </div>
                <button>Proceed To Checkout</button>
            </div>
            <div className="cart_promocode">
              <div>
                <p>If You have a promo code,Enter it here</p>
                <div className="cart_promocode_input">
                  <input type="text" placeholder='Promo Code'/>
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>


    </div>
  )
}

export default Cart