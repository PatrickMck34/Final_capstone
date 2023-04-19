import React from 'react'
import Item from '../Items/Item'
import { useSelector } from 'react-redux'
import * as itemActions from '../../store/item'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
function WishList () {
    const dispatch = useDispatch()
    const items = useSelector(state=>state.item.allItems)
    const cartItems = useSelector(state => state.cart.allItems)
    let price = 0
      useEffect(() => {
    
        dispatch(itemActions.getAllItems())
        
       
         
          
      }, []);
    return (
        <div>

        {Object.values(cartItems).map((item, idx) =>(
            <div className="Item">
           <div className="Item-info">
               <p>{item?.name}</p>
               <p className="Item-price">
                   <small>$</small>
                   <strong>{item?.price}</strong>
               </p>
               <div className="Item-rating">
                   {Array(item?.rating)
                   .fill()
                   .map((_, i) => (
                       <i className="fa-solid fa-meteor"></i>
                       ))}
               </div>
           </div>
           <strong>total so far (inc tax)  =${Math.ceil(( price +=((item.price * .06) +item.price)))}</strong>
           <img className="image-checkout" src={item?.imageUrl} alt="" />
           <button className="Demo checkout-button" onClick={()=>dispatch(itemActions.deleteItems(item?.id)).then(()=>dispatch(itemActions.getAllItems()))}>Remove From Cart</button>
            </div>
                ))}
                </div>
      
    )
}
export default WishList