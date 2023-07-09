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
        <div className="nav bg-gray-900">
            <NavLink to='/'>
            <img className="nav-logo" src="https://i.postimg.cc/ZYrg8zCH/Simply-Amazin.png"  />
            </NavLink>

            <div className="nav-search rounded flex w-full ml-2 h-9">
                <input className="nav-search-input flex w-full h-8 "
                type="text" 
                onClick={()=>window.alert("Coming soon")}/>
                <i className="fa-solid fa-magnifying-glass rounded  " id="search-icon"onClick={()=>window.alert("Coming soon")}/>
                </div>

            <div className="nav-nav">
                <div className="nav-option">
                  {user?.user === null ? (
                    <div>
               
                <h4  className="welcome mt-1">Welcome
                   </h4>
                <br></br>
                   
                   <h3 className="text-sm pb-2">New Customer
                   </h3>
                  
                 
                   </div>
                   ):(
                   <div>

                        <h4  className="welcome">Welcome
                   </h4>
                <br></br>
                   
                   <h3 >{user?.user?.username}
                   </h3>
                   </div>
                 
                   )}
          
                  
                  
                   
                  
                  
                  </div>
                
                  {user?.user !== null ? (
                <div className="nav-option-basket">
                    <Link to="/cart">
                        
                        <button className={"fa-solid fa-cart-arrow-down text-white text-2xl mr-3"} id="cart-button">
                            <br></br>
                    {cart.length}
                            
                        </button>
                   
                    </Link>
                   
                </div>
                  ):(
                    <div></div>
                  )}
            </div>

            </div>
    )
}
export default Header