import React from "react";
import './checkout.css'
import Item from '../Items/Item'
function Cart({cart}) {
    return(
        <div className="checkout">

            <div className="checkout-left">
                <img className="checkout-ad" src="https://images-na.ssl-images-amazon.com/images/G/01/Lutron/Amazon_Diva_Smart_Launch_Banner_1500x300_English.jpg"></img>
                <h2 className="cart-title">Your Shopping Basket</h2>
                <Item id={1}title="Amazon Kindle Fire" price={219.99} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2xs4CcvDoHUKifWct4HZXwQ7C-129lLBrDXaqqH6P-jqVjOD7lEsA_JjFpLey7DUEQ0&usqp=CAU' alt="loading"
                     rating={3}/>
                     {cart}
                     
        </div>

        <div className="checkout-right">
            <h2>The subtotal</h2>
        </div>
        </div>

    )
}
export default Cart