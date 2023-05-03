import React from "react";
import './checkout.css'
import Item from '../Items/Item'
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import WishList from "../WishList/WishList";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useStateValue } from "../../store/StateProvider";
import { useEffect } from "react";
import * as itemActions from '../../store/item'
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as sessionActions from '../../store/session'
import { useHistory } from "react-router-dom";

function Cart() {
    const history = useHistory()
   let price = 0
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.item.allItems)
    const userId = useSelector(state=>state.session.user.id)
    // useEffect(() => {
    
    //     dispatch(itemActions.getAllItems())
        
       
         
          
    //   }, [cartItems]);

      const logout = (e) => {
      history.push('/')
        return dispatch(sessionActions.setUser(null));
     
      };
      const LogOff = (e) => {
        e.preventDefault();
         dispatch(sessionActions.setUser(null));
         return history.push('/')
         
        };
        return(
            <div className="checkout"> 

            <div className="checkout-left">
                <img className="checkout-ad" src="https://images-na.ssl-images-amazon.com/images/G/01/Lutron/Amazon_Diva_Smart_Launch_Banner_1500x300_English.jpg"></img>
            <div className="checkout-right">
                <Link to='/wish_list'>
                    <strong> View Your Wishlist</strong>
                    </Link> 
            
            <div className="wish-container">
                
            </div>
            </div>
                <h2 className="cart-title">Your Shopping Cart</h2>
                {Object.values(cartItems).map((item, idx) =>(
                    <div className="Item">
                   <div className="Item-info">
                       <p>{item?.name}</p>
                       <p className="Item-price">
                           <small>$</small>
                           <strong>{item?.price}</strong>
                       </p>
                       <div className="Item-rating">
                           {Array(item?.rating)
                           .fill()
                           .map((_, i) => (
                               <i className="fa-solid fa-meteor"></i>
                               ))}
                       </div>
                   </div>
                   <strong>total so far (inc tax)  =${Math.ceil(( price +=((item.price * .06) +item.price)))}</strong>
                   <img className="image-checkout" src={item?.imageUrl} alt="" />
                   <button className="Demo checkout-button" onClick={()=>dispatch(itemActions.deleteItems(item?.id)).then(()=>dispatch(itemActions.getAllItems()))}>Remove From Cart</button>
                    </div>
                        ))}

                        
                   
                    
                     
        <div className="checkout-button-container">
    
            <span className="checkout-buttons" onClick={((e)=> logout())}>Check Out</span>
       
               
                
                </div>
        </div>

        </div>
        

    )
}
export default Cart