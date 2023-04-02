import React from "react";
import "./checkoutPage.css"

import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as itemActions from '../../store/item'
import { Link } from "react-router-dom";
import * as sessionActions from "../../store/session"
import { useSelector } from "react-redux";

function Checkout () {
    return (
        <div>
            <iframe width="1600" height="315" src="https://m.media-amazon.com/images/I/A1FOjpZM7BL.mp4"></iframe>
        </div>
    )

}
export default Checkout