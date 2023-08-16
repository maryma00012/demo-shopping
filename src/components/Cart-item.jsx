import React, { useContext } from 'react'
import { cartContext } from '../context/Cart-context';
import { Link } from "react-router-dom";

export default function CartItem(props){
    
    const { cart, addToCart, removeFromCart, updateCartItem } = useContext(cartContext)
    const {id,productName,director,price,thumbnailImage} = props.data
    // useEffect(() => {
    //     setCalculation(() => count * 2);
    //   }, [count]); // <- add the count variable here
    
    return (
        <div className='card'>
            <Link to={`/products/${id}`}>
                <img className="thumbnailImage" src={thumbnailImage} alt={productName} />
                <p className="productName">{productName}</p>
                <p className="director">Directed by {director}</p>
                <p className="price">${price}</p>
                <p className="subTotalPrice">$ {price* cart[id]}</p>
            </Link>
            <div className='updateItemBtns'>
                <button onClick={()=>addToCart(id)}>+</button>
                <input value={cart[id]} onChange={(e)=> {updateCartItem(id, e.target.value)}}/>
                <button onClick={()=>removeFromCart(id)}>-</button>
            </div>
        </div>
    )
}