import React from "react";
import { useEffect } from "react";
import Item from "../Items/Item";
import { useDispatch, useSelector } from "react-redux";
import * as itemActions from '../../store/item'
function Items({Item}){
    const num = (window.location.href.length - 1)
    const  itemId = (window.location.href[num])
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(itemActions.getItem(itemId))
    }, [dispatch])


return(
    <div>
        This is  an Item menu 
    </div>
)
}
export default Items