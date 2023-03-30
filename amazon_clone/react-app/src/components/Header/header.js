import React from 'react'
import './header.css'
import {  Link} from 'react-router-dom'
import SignupFormModal from '../SignupFormModal'
import OpenModalButton from '../OpenModalButton'
import { NavLink } from 'react-router-dom'
import * as sessionActions from '../../store/session'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useStateValue } from '../../store/StateProvider'

function Header() {
    
    const [{ basket }, dispatch] = useStateValue();
    const cartItems = useSelector(state => state.item.allItems)
    const cart = Object.values(cartItems)
    
    return(
        <div className="nav">
            <Link to='/'>
            <img className="nav-logo" src="https://i.postimg.cc/ZYrg8zCH/Simply-Amazin.png"  />
            </Link>

            <div className="nav-search">
                <input className="nav-search-input"
                type="text" 
                onClick={()=>window.alert("Coming soon")}/>
                <i className="fa-solid fa-magnifying-glass" id="search-icon"/>
                </div>

            <div className="nav-nav">
                <div className="nav-option">
                  
                <Link to={'/login'}>
                <button className='nav-option1' >Log In
                   </button>
                   </Link>
                   <Link to={'/signup'}>
                   <button className='nav-option2' >Sign Up
                   </button>
                   </Link>
                </div>
                <div className="nav-option">
                  
                  <Link to={'/logout'}>
                  <button className='nav-option1'onClick={(()=> dispatch(sessionActions.logout()))} >Logout
                     </button>
                     </Link>
                     <Link to={'/signup'}>
                     <button className='nav-option2' >
                     </button>
                     </Link>
                  </div>
                <div className="nav-option">
                 
                </div>
                <div className="nav-option">
                  
                </div>
                <div className="nav-option-basket">
                    <Link to="/cart">
                        <button className={"fa-solid fa-cart-shopping"} id="cart-button">
                    <span className="nav-option2 basket-count">{basket?.length}</span>
                            
                        </button>
                   
                    </Link>
                   
                </div>
            </div>

            </div>
    )
}
export default Header