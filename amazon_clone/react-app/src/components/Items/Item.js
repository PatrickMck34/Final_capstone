import React from "react";
import './Item.css'
import { Link } from "react-router-dom";

function Item({id, title, image, price, rating, cart}) {
    
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
                
                        
                        <Link to={`/review/${title}/${id}`} >
                        <button className="Item-button">Write Review</button>
                        </Link>
        </div>
    )
}
export default Item