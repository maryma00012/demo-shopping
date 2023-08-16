import React, { useContext } from 'react'

import { PRODUCTS } from '../data/products.js'
import { cartContext } from '../context/Cart-context';
import CartItem from '../components/Cart-item';


export const Cart = () => {
  const { cart, resetCart } = useContext(cartContext)
  let totalPrice = 0;
  return (
    <div className="cart">
        <h1>Cart</h1>
        {console.log("cart in cart", JSON.stringify(cart))}
        <div className="cartItems">
          {
            Object.keys(cart).length!==0?
              <div>
                <div className="cardContainer">
                  {PRODUCTS.map( (item) => {
                    if(cart[item.id] || cart[item.id] === ""){
                      if(cart[item.id] === ""){
                        totalPrice += item.price*0
                      }else{
                        totalPrice += item.price* cart[item.id]
                      }
                      return <CartItem key={item.id} data={item} />;
                    }
                    return null
                  })}
                </div>
                <p className="cartTotal">Total: ${totalPrice}</p>
                <div className="cartButtons largeButton">
                  <button onClick={()=>{resetCart()}}>Reset Cart</button>
                  <button disabled>Checkout</button>
                </div>
              </div>
            : <p>Cart is empty</p>
          }
        </div>
    </div>
  )
}
