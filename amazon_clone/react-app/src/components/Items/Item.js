import React from "react";
import './Item.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as cartActions from '../../store/cart'
import { useSelector } from "react-redux";
import * as itemActions from "../../store/item"

function Item({id, title, image, price, rating}) {
    const dispatch = useDispatch()
    
    const user = useSelector(state=>state.session)
    const userId = user?.user?.id
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
                
                     <button className="Item-button" onClick={()=>dispatch(itemActions.createItem4()).then(()=>window.alert("Item added to cart")).then(()=>dispatch(itemActions.getAllItems()))}>Add To Cart</button>
                     <button className="Item-button" onClick={()=>dispatch(cartActions.createCartItem(userId)).then(()=>window.alert("Item added to Wish List!")).then(()=>dispatch(cartActions.getAllCartItems()))}>Add To List</button>
                        <Link to={`/review/9`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>
        </div>
    )
}
export default Item