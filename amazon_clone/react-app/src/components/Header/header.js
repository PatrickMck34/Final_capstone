import React from 'react'
import './header.css'
import { Link} from 'react-router-dom'

function Header() {
    return(
        <div className="nav">
            <Link to='/'>
            <img className="nav-logo" src="https://i.postimg.cc/ZYrg8zCH/Simply-Amazin.png"  />
            </Link>

            <div className="nav-search">
                <input className="nav-search-input"
                type="text" />
                <i className="fa-solid fa-magnifying-glass" id="search-icon"/>
                </div>

            <div className="nav-nav">
                <div className="nav-option">
                   <span className='nav-option1'>Hello</span>
                   <span className='nav-option2'>Sign In</span>
                </div>
                <div className="nav-option">
                 
                </div>
                <div className="nav-option">
                  
                </div>
                <div className="nav-option-basket">
                <i className="fa-solid fa-cart-shopping"  />
                   
                    <span className="nav-option2 basket-count">0</span>
                    <span></span>
                </div>
            </div>

            </div>
    )
}
export default Header