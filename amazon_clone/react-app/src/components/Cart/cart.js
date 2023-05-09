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
import * as orderActions from '../../store/orders'
import { useHistory } from "react-router-dom";



function Cart() {
    const history = useHistory()
   let price = 0
    const dispatch = useDispatch()
    const orders = useSelector(state => state.orders.allItems)
    const cartItems = useSelector(state => state.item?.allItems)
    const userId = useSelector(state=>state.session?.user?.id)
    const allDelete = () => {
        Object.values(cartItems).map((item, idx) => {
           return dispatch(itemActions.deleteItems(item.id))
        }
    )}
    const Orders = () => {  

                Object.values(cartItems).map((item, idx) => {
                    if (item?.name === "iBUYPOWER Pro Gaming PC"){
                         dispatch(orderActions.createOrderItem(userId))
                         dispatch(itemActions.deleteItems(item.id))
                    }
                    if (item?.name === "CyberpowerPC Gamer Xtreme VR Gaming PC"){
                       dispatch(orderActions.createOrderItem2(userId))
                       dispatch(itemActions.deleteItems(item.id))
                    }
    
                    if (item?.name === "Alienware Aurora R14 Liquid Cooled Gaming Desktop - AMD Ryzen 9"){
                         dispatch(orderActions.createOrderItem3(userId))
                         dispatch(itemActions.deleteItems(item.id))
                    }
    
                    if (item?.name === "Fly YUTING Gaming Chair, Ergonomic Computer Cockpit Chair with Led Lights"){
                        dispatch(orderActions.createOrderItem4(userId))
                        dispatch(itemActions.deleteItems(item.id))
    
                    }
                    if (item?.name === "YUYTIN Super Deluxe Racing Executive Office Cockpit Gaming Station"){
                        dispatch(orderActions.createOrderItem5(userId))
                        dispatch(itemActions.deleteItems(item.id))
    
                    }
                    if (item?.name === "Samsung - Odyssey Ark 55” LED Curved 4K UHD Gaming Monitor - Black") {
                        dispatch(orderActions.createOrderItem6(userId))
                        dispatch(itemActions.deleteItems(item.id))
    
                    }
    
                }
               
                )}


      const logout = (e) => {
      history.push('/')
        return dispatch(sessionActions.setUser(null));
     
      };
      const LogOff = (e) => {
        e.preventDefault();
         dispatch(sessionActions.setUser(null));
         return history.push('/')
         
        };
        useEffect(() => {
    
            // dispatch(orderActions.getAllOrderItems())
            dispatch(itemActions.getAllItems())
            
           
             
              
          }, [orders]);
        return(
            <div className="checkout"> 

            <div className="checkout-left">
                <img className="checkout-ad" src="https://images-na.ssl-images-amazon.com/images/G/01/Lutron/Amazon_Diva_Smart_Launch_Banner_1500x300_English.jpg"></img>
            <div className="checkout-right">
                <NavLink to='/wish_list'>
                    <strong> View Your Wishlist</strong>
                    </NavLink> 
                    <Link to='/prev_order'>
                    <strong> View Previous Orders</strong>
                    </Link>
            
            <div className="wish-container">
                
            </div>
            </div>
                <h1 className="cart-title">Your Shopping Cart</h1>
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
                   <button className="Demo checkout-button" onClick={()=>dispatch(itemActions.deleteItems(item?.id)).then(()=>dispatch(itemActions.getAllItems())).then(()=>window.alert("Item Removed from Cart"))}>Remove From Cart</button>
                    </div>
                        ))}

                        
                   
                    
                     
        <div className="checkout-button-container">
    
            <button className="checkout-buttons" onClick={()=>Orders()}>Check Out</button>
       
               
                
                </div>
        </div>

        </div>
        

    )
}
export default Cart