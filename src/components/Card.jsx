import React from 'react';
import '../App.css';
import { PRODUCTS } from '../data/products.js'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Card({movieId}){
   
    let productInfo = PRODUCTS.find((product)=> product.id === parseInt(movieId))
    const {thumbnailImage, productName, director, price} = productInfo

    // useEffect(() => {
    //     setCalculation(() => count * 2);
    //   }, [count]); // <- add the count variable here
    
    return (
        <div className='card'>
            <img className="thumbnailImage" src={thumbnailImage} alt={productName} />
            <p className="productName">{productName}</p>
            <p className="director">Directed by {director}</p>
            <p className="price">${price}</p>
        </div>
    )
}