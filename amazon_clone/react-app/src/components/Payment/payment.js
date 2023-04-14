import react from "react"
import { useStateValue } from "../../store/StateProvider"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import './payment.css'
import { useSelector } from "react-redux"


function Payment() {

    const user = useSelector(state=>state.session.user)
    return (
        <div className="payment"> 
        <div className="payment-container">
            <div className="payment-section">
                <div className="payment-title">
                
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment-address">
                    <p>{user?.username}</p>
                </div>


            </div>
            <div className="payment-section">
            <div className="payment-title">
                <h3>Review Items and delivery</h3>
</div>
        <div className="payment-items"></div>

                
            </div>
            <div className="payment-section">

                
            </div>
            </div>
            </div>
    )
}
export default Payment