import './about.css'
import { useDispatch } from 'react-redux'
import * as itemActions from './../store/item'


const CartModal = () => {
const dispatch = useDispatch()
    return (
        <div id="about-modal-container">
            <h2 id="about-modal-prompt">About Me</h2>
            <h3>Simply-Amazin is an amazon-esque clone. Get in touch with the creator:</h3>
            <div id="contact-info-container">
        
                <div id="patrick-contact-container">
                    <p className="contact-name">Patrick McKinney</p>
                    <div className="contact-links-container">
                       
                    </div>
                </div>
                
        
                   
                </div>
<button className="Item-button" onClick={()=>dispatch(itemActions.createItem()).then(()=>dispatch(itemActions.getAllItems()))}>Add Item?</button>
            </div>
      
    )
}


         
        
             
            

export default CartModal