import React, { useContext} from 'react';
import '../App.css';
import { Outlet, useNavigate  } from "react-router-dom";
import { searchContext } from '../context/Search-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons'

export default function Nav(){
    const navigate = useNavigate();
    const { searchProducts } = useContext(searchContext)
    return (
        <>
            <nav className="mainNav">
                <div className="leftNavLogo">Demo</div>
                <div className="rightNav">
                    <ul>
                        {/* <li className='nav-user'><FontAwesomeIcon icon="fa-solid fa-user" />
                            <ul>
                                <li><Link to="/my-favourite">My favourite</Link></li>
                                <li><Link to="/watched-list">Watched list</Link></li>
                            </ul>
                        </li> */}
                        <li className='navHome'><button onClick={()=> navigate("/")}><FontAwesomeIcon icon={faHouse} /></button></li>
                        <li className='navCart'><button onClick={()=> navigate("/cart")}><FontAwesomeIcon icon={faCartShopping} /></button></li>
                        <li className='navSearch'><FontAwesomeIcon icon={faMagnifyingGlass} /><input type='text' placeholder='Search the movie here' onChange={(e)=>searchProducts(e.target.value)}/></li>
                    </ul>
                </div>
            </nav>
            <Outlet />  
        </>

    )
}