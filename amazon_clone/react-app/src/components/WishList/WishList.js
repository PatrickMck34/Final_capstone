import React from 'react'
import Item from '../Items/Item'
import { useSelector } from 'react-redux'
function WishList () {
    const items = useSelector(state=>state.item.allItems)
    
    return (
        <div>
            {Object.values(items).map((el)=> {
                <div>
            <Item title={el.name} price={el.price} rating={el.rating}></Item>
            </div>
            })}
        </div>
    )
}
export default WishList