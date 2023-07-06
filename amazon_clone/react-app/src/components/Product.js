import React from "react";
import "./Product.css";
import OpenModalButton from "../components/OpenModalButton";
import { useDispatch } from "react-redux";
import * as itemActions from '../store/item'
import CartModal from "./Cart/CartModal";





import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import * as cartActions from '../store/cart'


import {useModal} from "../context/Modal"



function Product({ id,description, title, image, price, rating }) {
    const {closeModal} = useModal()
    const user = useSelector(state => state.session)
    const userId = user?.user?.id
    const items = useSelector(state => state.items?.allItems)
   
    const sessionUser = useSelector(state => state.session.user);
  const dispatch= useDispatch()
 
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p>{description}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      </div>
  
  )}


export default Product;