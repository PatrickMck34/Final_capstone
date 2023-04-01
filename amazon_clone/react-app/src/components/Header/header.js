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
import * as itemActions from '../../store/item'

function Header() {
    const user = useSelector(state=>state.session)
    const [{ basket }, dispatch] = useStateValue();
    const cartItems = useSelector(state => state.item.allItems)
    const cart = Object.values(cartItems)
    
    return(
        <div className="nav">
            <NavLink to='/'>
            <img className="nav-logo" src="https://i.postimg.cc/ZYrg8zCH/Simply-Amazin.png"  />
            </NavLink>

            <div className="nav-search">
                <input className="nav-search-input"
                type="text" 
                onClick={()=>window.alert("Coming soon")}/>
                <i className="fa-solid fa-magnifying-glass" id="search-icon"onClick={()=>window.alert("Coming soon")}/>
                </div>

            <div className="nav-nav">
                <div className="nav-option">
                  {user?.user === null ? (
                    <div>
               
                <h4  className="welcome">Welcome
                   </h4>
                
                   
                   <h3 >New Customer
                   </h3>
                  
                 
                   </div>
                   ):(
                   <span>

                        <h4  className="welcome">Welcome
                   </h4>
                
                   
                   <h3 >{user?.user?.username}
                   </h3>
                   </span>
                 
                   )}
          
                  
                  
                   
                  
                  
                  </div>
                
          
                <div className="nav-option-basket">
                    <Link to="/cart">
                        <button className={"fa-solid fa-cart-shopping"} id="cart-button">
                    <span className="nav-option2 basket-count">{cart.length}</span>
                            
                        </button>
                   
                    </Link>
                   
                </div>
            </div>

            </div>
    )
}
export default Header