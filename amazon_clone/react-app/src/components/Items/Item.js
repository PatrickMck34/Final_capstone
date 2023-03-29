import React from "react";
import './Item.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as cartActions from '../../store/cart'
import { useSelector } from "react-redux";

function Item({id, title, image, price, rating}) {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.session.user)
 
    return(
        <div className='Item'>
            <div className="Item-info">
                <p>{title}</p>
                <p className="Item-price">
                    <small>$</small>
                    <strong>{price}</strong>
                    </p>
                        <div className='Item-rating'>
                            {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <i className="fa-solid fa-meteor"></i>
                            ))}
                        </div>
                  
              
            </div>
                      
                    
                     <img src={image}/>
                
                        
                            <button className="Item-button" onClick={(()=>dispatch(cartActions.getCart(user.id)))}>Add to Cart</button>
                        <Link to={`/review/${title}/${id}`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>
        </div>
    )
}
export default Item