import React from "react";
import './checkout.css'
import Item from '../Items/Item'
import { useSelector } from "react-redux";
import Subtotal from "../Subtotal/subtotal";
import CheckoutProduct from "../checkout/cartItems";
import { useStateValue } from "../../store/StateProvider";
function Cart() {
    const cartItems = useSelector(state => state.item.allItems)
    const [{basket}, dispatch] = useStateValue()
   
    return(
        <div className="checkout"> 

            <div className="checkout-left">
                <img className="checkout-ad" src="https://images-na.ssl-images-amazon.com/images/G/01/Lutron/Amazon_Diva_Smart_Launch_Banner_1500x300_English.jpg"></img>
                <h2 className="cart-title">Your Shopping Basket</h2>
                {Object.values(basket).map((item, idx) =>(
                   
                        
                    <CheckoutProduct id={item?.id}title={item?.name} price={item?.price} image={item?.image} 
                    rating={item?.rating} />  
                        ))}
                       

                        
                   
                    
                     
        </div>

        <div className="checkout-right">
           
            <Subtotal/>      
        </div>
        </div>

    )
}
export default Cart