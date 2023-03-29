import React from "react";
import './checkout.css'
import Item from '../Items/Item'
import { useSelector } from "react-redux";
function Cart() {
    const cartItems = useSelector(state => state.item.allItems)
    let subtotal = 299+179+179.99+38.99+26.99+1999.99
   
    return(
        <div className="checkout"> 

            <div className="checkout-left">
                <img className="checkout-ad" src="https://images-na.ssl-images-amazon.com/images/G/01/Lutron/Amazon_Diva_Smart_Launch_Banner_1500x300_English.jpg"></img>
                <h2 className="cart-title">Your Shopping Basket</h2>
                {Object.values(cartItems).map((item, idx) =>(
                   
                        
                    <Item id={1}title={item?.name} price={item?.price} image={item?.imageUrl} 
                    rating={item?.rating} />  
                        ))}
                       

                        
                   
                    
                     
        </div>

        <div className="checkout-right">
            {/* <Subtotal /> */}
            <h2>The subtotal: {subtotal}</h2>
        </div>
        </div>

    )
}
export default Cart