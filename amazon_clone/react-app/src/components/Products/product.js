import React from 'react'
import { useStateValue } from '../../store/StateProvider';

function Product({id, title, image, price, rating}) {
    const [{ basket, user }, dispatch] = useStateValue();

    console.log("this is the basket >>" , basket);

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title, 
                image: image, 
                price: price, 
                rating: rating,
                }
        })
    }
    return (
        <div className="Item">
            <div className="Item-info">
                <p>{title}</p>
                <p className="Item-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="Item-rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <i className="fa-solid fa-meteor"></i>
                    ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add To Cart</button>
        </div>
    )
}
export default Product