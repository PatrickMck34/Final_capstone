import React from "react";
import './Item.css'
// import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
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
                      
                     {/* <img className="Item-image" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2xs4CcvDoHUKifWct4HZXwQ7C-129lLBrDXaqqH6P-jqVjOD7lEsA_JjFpLey7DUEQ0&usqp=CAU'></img> */}
                     <img src={image}/>
                        <button className="Item-button">Add to Cart</button>
        </div>
    )
}
export default Item