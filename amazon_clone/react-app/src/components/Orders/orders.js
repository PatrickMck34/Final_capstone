import React from 'react'
import Item from '../Items/Item'
import { useSelector } from 'react-redux'
import * as orderActions from '../../store/orders'
import * as cartActions from "../../store/cart"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export function Orders() {
    const dispatch = useDispatch()
    const items = useSelector(state => state.item?.allItems)
    const cartItems = useSelector(state => state.orders?.allItems)
    let price = 0
    const user = useSelector(state => state.session)
    const userId = user?.user?.id
   
    useEffect(() => {

        dispatch(orderActions.getAllOrderItems())




    }, []);
   return (
    <div>
 {Object.values(cartItems).map((item, idx) => (
                <div>
                    {item?.user_id === userId ? (
                        <div>

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
                                
                                <img className="image-checkout" src={item?.imageUrl} alt="" />
                                
                            </div>

                        </div>
                    ) : (
                        

                            <div></div>
                     

                    )}

                </div>
            ))
            }
        </div>
   
   )}  

export default Orders