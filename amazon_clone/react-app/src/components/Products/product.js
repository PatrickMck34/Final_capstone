import React from 'react'
import { useStateValue } from '../../store/StateProvider';
import { Link } from 'react-router-dom';
import * as itemActions from '../../store/item'

function Product({id, title, image, price, rating}) {
    const [{ basket, user }, dispatch] = useStateValue();

  

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
            <button onClick={()=>dispatch(itemActions.createItem2())}>Add To Cart</button>
            <Link to={`/review/${title}/${id}`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>
        </div>
    )
}
export default Product