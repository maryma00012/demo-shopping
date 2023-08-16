import React, {useContext} from 'react';

import Card from '../components/Card.jsx'
import { Link } from "react-router-dom";
import { PRODUCTS } from '../data/products.js'
import { searchContext } from '../context/Search-context';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Home(){
    // useEffect(() => {
    //     setCalculation(() => count * 2);
    //   }, [count]); // <- add the count variable here
    const { productQuery } = useContext(searchContext)
    var productArray = productQuery? PRODUCTS.filter((product)=>product.productName.toLowerCase().includes(productQuery)|| product.director.toLowerCase().includes(productQuery)):PRODUCTS

    return (
        <div>
            <div className='movieCards cardContainer'>
                {productArray.map((product) => { 
                    const {id} = product
                    return <Link to={`/products/${id}`}><Card key={id} movieId={id}/></Link>
                })}
            </div>
        </div>
    )
}