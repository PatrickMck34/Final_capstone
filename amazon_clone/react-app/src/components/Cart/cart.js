import React from "react";
import './checkout.css'
import Item from '../Items/Item'
import { useSelector } from "react-redux";
function Cart() {
    const cartItems = useSelector(state => state.item.allItems)

    return(
        <div className="checkout"> 

            <div className="checkout-left">
                <img className="checkout-ad" src="https://images-na.ssl-images-amazon.com/images/G/01/Lutron/Amazon_Diva_Smart_Launch_Banner_1500x300_English.jpg"></img>
                <h2 className="cart-title">Your Shopping Basket</h2>
                {Object.values(cartItems).map((item, idx) =>(
                   

                    <Item id={1}title={cartItems[idx+1]?.name} price={cartItems[idx+1]?.price} image={cartItems[idx+1]?.imageUrl} 
                    rating={cartItems[idx+1]?.rating}/>
                        ))}
                    <p>
                       
                        </p>
                    
                     
        </div>

        <div className="checkout-right">
            <h2>The subtotal</h2>
        </div>
        </div>

    )
}
export default Cart