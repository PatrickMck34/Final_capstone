import React from "react";
import './Item.css'

function Item({id, title, image, price, rating}) {
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
                        <button className="Item-button">Add to Cart</button>
        </div>
    )
}
export default Item