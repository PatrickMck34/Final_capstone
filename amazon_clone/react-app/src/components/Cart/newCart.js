import React from "react";
import './checkout.css'
import Item from '../Items/Item'
import { useSelector } from "react-redux";
import Subtotal from "../Subtotal/subtotal";
import CheckoutProduct from "../checkout/cartItems";
import { useStateValue } from "../../store/StateProvider";
import { useEffect } from "react";
import * as itemActions from '../../store/item'
import { useDispatch } from "react-redux";

function NewCart() {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.item.allItems)
    const [{basket}, setCart] = useStateValue()
    const name = basket.name
    const price =  basket.price
    const image = basket.image
    const rating =basket.rating
    const item = {name, price, image, rating}

    return(
        <div className="checkout"> 
<button onClick={()=>dispatch(itemActions.createItem())}>ADD1</button>
            <div className="checkout-left">
                <img className="checkout-ad" src="https://images-na.ssl-images-amazon.com/images/G/01/Lutron/Amazon_Diva_Smart_Launch_Banner_1500x300_English.jpg"></img>
                <h2 className="cart-title">Your Shopping Cart</h2>
                {Object.values(basket).map((item, idx) =>(
                   dispatch(itemActions.createItem({item}))
                        
                      
                        ))}
                       

                        
                   
                    
                     
        </div>

        <div className="checkout-right">
           
            <Subtotal/>      
        </div>
        </div>

    )
}
export default NewCart