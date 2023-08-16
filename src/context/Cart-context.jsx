import React, { useState, createContext, useEffect } from 'react'

export const cartContext = createContext(null)

export const CartContextProvider = (props) => {
    const savedCart = JSON.parse(localStorage.getItem('demoCart')) || {};
    const [cart, setCart] = useState(savedCart)

    useEffect(() => {
        localStorage.setItem('demoCart',JSON.stringify(cart))
        console.log("cart", JSON.stringify(cart))
    }, [cart])


    const addToCart = (productId) => {
        setCart((prev)=>({...prev, [productId]: prev[productId]? prev[productId]+1: 1} ))
       
    }

    const removeFromCart = (productId) => {
        if(cart[productId] !== 1){
            setCart((prev)=>({...prev, [productId]: prev[productId]-1} ))
         
        }else{
            setCart((prev)=>{
                const { [productId]: cartItem, ...rest} = prev;
                return rest;})
        }
       
    }

    const updateCartItem = (productId, itemQuantity) =>{
        if(itemQuantity ===""){
            setCart((prev)=>({...prev, [productId]: ""}) )
        }else{
            setCart((prev)=>({...prev, [productId]: parseInt(itemQuantity)} ))
        }
        
    }

    const resetCart = (prev) =>{
        setCart((prev)=>({}))
    }

    const contextValue = {cart, addToCart, removeFromCart, updateCartItem, resetCart}
    return (
        <cartContext.Provider value={contextValue}>{props.children}</cartContext.Provider>
    )
}
