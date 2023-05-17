import { useDispatch } from "react-redux"
import * as itemActions from "../../store/item"
import {useModal} from "../../context/Modal"



function CartModal({nums})  {
    const {closeModal} = useModal()


 console.log(nums)

const dispatch = useDispatch()

    if (nums === 1) {
        dispatch(itemActions.createItem())
        dispatch(itemActions.getAllItems())
        closeModal()
        return (
            <div id="about-modal-container">
                Item Added!
                        </div>
        )
       
    }
    if (nums === 2) {
        
     
        dispatch(itemActions.createItem2())
    }

    if (nums === 3) {
     
       return closeModal()
    }

    if (nums === 4) {
        dispatch(itemActions.createItem4())
        dispatch(itemActions.getAllItems())
        return (
            <div id="about-modal-container">
                Item Added!
                        </div>
        )
    }
    if (nums === 5) {
        dispatch(itemActions.createItem5())
        return (
            <div id="about-modal-container">
                Item Added!
                        </div>
        )

    }
    if (nums === 6) {
        dispatch(itemActions.createItem6()).then(()=>dispatch(itemActions.getAllItems()))
        // dispatch(itemActions.getAllItems())
        return (
            <div id="about-modal-container">
                Item Added!
                        </div>
        )
    }

    return (
        <div id="about-modal-container">
            Item Added!
                    </div>
    )
}

export default CartModal