import React from 'react'
import Item from '../Items/Item'
import { useSelector } from 'react-redux'
import * as orderActions from '../../store/order'
import * as cartActions from "../../store/cart"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
export function Orders() {
    const dispatch = useDispatch()
    const items = useSelector(state => state.item?.allItems)
    const cartItems = useSelector(state => state.cart?.allItems)
    let price = 0
    const user = useSelector(state => state.session)
    const userId = user?.user?.id
   
    useEffect(() => {

        dispatch(orderActions.getAllOrderItems())




    }, []);
   

        

            Object.values(cartItems).map((item, idx) => {
                if (item.name === "iBUYPOWER Pro Gaming PC"){
                    dispatch(orderActions.createOrderItem(userId))
                }
                if (item.name === "CyberpowerPC Gamer Xtreme VR Gaming PC"){
                    dispatch(orderActions.createOrderItem2(userId))
                }

                   
                
                if (item.name === "Alienware Aurora R14 Liquid Cooled Gaming Desktop - AMD Ryzen 9"){
                    dispatch(orderActions.createOrderItem3(userId))
                }

                if (item.name === "Fly YUTING Gaming Chair, Ergonomic Computer Cockpit Chair with Led Lights"){
                    dispatch(orderActions.createOrderItem4(userId))

                }
                if (item.name === "YUYTIN Super Deluxe Racing Executive Office Cockpit Gaming Station"){
                    dispatch(orderActions.createOrderItem5(userId))

                }
                if (item.name === "Samsung - Odyssey Ark 55” LED Curved 4K UHD Gaming Monitor - Black") {
                    dispatch(orderActions.createOrderItem6(userId))

                }

            }
            )}

          

export default Orders