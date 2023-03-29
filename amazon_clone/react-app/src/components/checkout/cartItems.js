import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../../store/StateProvider'

function CheckoutProduct({id, image, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue()
    const removeFromBasket =() =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutproduct-image" src={image}></img>

            <div className="checkoutproduct-info">
                <p className="checkoutproduct-title">{title}</p>
                <p className="checkoutproduct-price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="checkoutproduct-rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <i className="fa-solid fa-meteor"></i>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove From Cart</button>
        </div>
        </div>
    )
}export default CheckoutProduct