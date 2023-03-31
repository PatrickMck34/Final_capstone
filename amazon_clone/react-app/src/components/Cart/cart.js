import React from "react";
import './checkout.css'
import Item from '../Items/Item'
import { useSelector } from "react-redux";


import { useStateValue } from "../../store/StateProvider";
import { useEffect } from "react";
import * as itemActions from '../../store/item'
import { useDispatch } from "react-redux";

function Cart() {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.item.allItems)
    useEffect(() => {
        
        dispatch(itemActions.getAllItems())
        
       
         
          
      }, []);
    return(
        <div className="checkout"> 

            <div className="checkout-left">
                <img className="checkout-ad" src="https://images-na.ssl-images-amazon.com/images/G/01/Lutron/Amazon_Diva_Smart_Launch_Banner_1500x300_English.jpg"></img>
                <h2 className="cart-title">Your Shopping Cart</h2>
                {Object.values(cartItems).map((item, idx) =>(
                   
                   <div className="Item">
                   <div className="Item-info">
                       <p>{item.name}</p>
                       <p className="Item-price">
                           <small>$</small>
                           <strong>{item.price}</strong>
                       </p>
                       <div className="Item-rating">
                           {Array(item.rating)
                           .fill()
                           .map((_, i) => (
                               <i className="fa-solid fa-meteor"></i>
                           ))}
                       </div>
                   </div>
                   <img src={item.imageUrl} alt="" />
                   <button onClick={()=>dispatch(itemActions.deleteItems(item.id)).then(()=>dispatch(itemActions.getAllItems()))}>Remove From Cart</button>
                    </div>
                        ))}
                       

                        
                   
                    
                     
        </div>

        <div className="checkout-right">
           
              
        </div>
        </div>

    )
}
export default Cart