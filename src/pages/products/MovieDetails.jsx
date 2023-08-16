import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { PRODUCTS } from '../../data/products.js'
import { cartContext } from '../../context/Cart-context';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function MovieDetails(){

    const { cart, addToCart, removeFromCart } = useContext(cartContext)
    // useEffect(() => {
    //     setCalculation(() => count * 2);
    //   }, [count]); // <- add the count variable here
    
    const { productId } = useParams();
    const  product = PRODUCTS.find((product)=> product.id === parseInt(productId))
    const {derailImage, productName, price, detailsDesc} = product
    return (
        <div className='productDetails'>
            <div className='productImage'><img alt={productName} src={derailImage} /></div>
            <div className='productInfo'>
                <div className='productName'><p>{productName}</p></div>
                <div className='productPrice'><p>${price}</p></div>
                <div className='productDetailsDesc'><p>{detailsDesc}</p></div>
                <div className='updateItemBtns'>
                    <button onClick={()=>addToCart(productId)}>+</button>
                    <p>Current amount in cart: {cart[productId]? cart[productId]: 0}</p>
                    <button onClick={()=>removeFromCart(productId)}>-</button>
                </div>
            </div>
        </div>
    )
}