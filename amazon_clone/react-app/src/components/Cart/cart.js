import React from "react";
import './checkout.css'
import Item from '../Items/Item'
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import WishList from "../WishList/WishList";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useStateValue } from "../../store/StateProvider";
import { useEffect } from "react";
import * as itemActions from '../../store/item'
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as sessionActions from '../../store/session'
import * as orderActions from '../../store/orders'
import { useHistory } from "react-router-dom";
import CartModal from "./CartModal";
import OpenModalButton from "../OpenModalButton/index";
import RemoveModal from "./RemoveModal";



function Cart() {
    const history = useHistory()
    let price = 0
    const dispatch = useDispatch()
    const orders = useSelector(state => state.orders.allItems)
    const cartItems = useSelector(state => state.item?.allItems)
    const userId = useSelector(state => state.session?.user?.id)
    const allDelete = () => {
        Object.values(cartItems).map((item, idx) => {
            return dispatch(itemActions.deleteItems(item.id))
        }
        )
    }
    const Orders = () => {

        Object.values(cartItems).map((item, idx) => {
            if (item?.name === "iBUYPOWER Pro Gaming PC") {
                dispatch(orderActions.createOrderItem(userId))
                dispatch(itemActions.deleteItems(item.id))
            }
            if (item?.name === "CyberpowerPC Gamer Xtreme VR Gaming PC") {
                dispatch(orderActions.createOrderItem2(userId))
                dispatch(itemActions.deleteItems(item.id))
            }

            if (item?.name === "Alienware Aurora R14 Liquid Cooled Gaming Desktop - AMD Ryzen 9") {
                dispatch(orderActions.createOrderItem3(userId))
                dispatch(itemActions.deleteItems(item.id))
            }

            if (item?.name === "Fly YUTING Gaming Chair, Ergonomic Computer Cockpit Chair with Led Lights") {
                dispatch(orderActions.createOrderItem4(userId))
                dispatch(itemActions.deleteItems(item.id))

            }
            if (item?.name === "YUYTIN Super Deluxe Racing Executive Office Cockpit Gaming Station") {
                dispatch(orderActions.createOrderItem5(userId))
                dispatch(itemActions.deleteItems(item.id))

            }
            if (item?.name === "Samsung - Odyssey Ark 55” LED Curved 4K UHD Gaming Monitor - Black") {
                dispatch(orderActions.createOrderItem6(userId))
                dispatch(itemActions.deleteItems(item.id))

            }

        }

        )
    }


    const logout = (e) => {
        history.push('/')
        return dispatch(sessionActions.setUser(null));

    };
    const LogOff = (e) => {
        e.preventDefault();
        dispatch(sessionActions.setUser(null));
        return history.push('/')

    };
    useEffect(() => {

        // dispatch(orderActions.getAllOrderItems())
        dispatch(itemActions.getAllItems())




    }, [orders]);
    return (
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
    <div class="mx-auto max-w-3xl">
      

                <img className="checkout-ad border-solid border" src="https://images-na.ssl-images-amazon.com/images/G/01/Lutron/Amazon_Diva_Smart_Launch_Banner_1500x300_English.jpg"></img>
                <br></br>
                <div className="border-solid border text-xl flex items-center justify-around">

                <NavLink to='/wish_list'>
                    <strong className="border-solid border-teal-600 "> View Your Wishlist</strong>
                </NavLink>
              

                <Link to='/prev_order'>
                    <strong className="border-solid border-teal-600 "> View Previous Orders</strong>
                </Link>
                
                </div>
                {/* <h1 className="cart-title">Your Shopping Cart</h1> */}
                {/* {Object.values(cartItems).map((item, idx) => (
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
                            <strong>total so far (inc tax)  =${Math.ceil((price += ((item.price * .06) + item.price)))}</strong>
                            <img className="image-checkout" src={item?.imageUrl} alt="" />
                            <button className="Demo checkout-button" onClick={() => dispatch(itemActions.deleteItems(item?.id)).then(() => dispatch(itemActions.getAllItems())).then(() => window.alert("Item Removed from Cart"))}>Remove From Cart</button>
                            </div>
                        ))} */}




          
</div>
                        <h1 class="text-xl font-bold text-gray-900">Your Cart
                        </h1>
                   

<br></br>

              {Object.values(cartItems).map((item, idx) => (
              
                  <>
                  
                  <div className="checkout-items text-xl">
     
      
          <li class="flex items-center gap-4 border-solid border-gray-500">
            <img
              src={item?.imageUrl}
              alt=""
              class="h-20 w-20 rounded object-cover border-solid border"
              />

            <div>
              <h3 class="text-xl text-gray-900">{item?.name}</h3>
              <dt class="inline">Price:</dt>
                  <dd class="inline"> ${item?.price}</dd>
            </div>

            <div class="flex flex-1 items-center justify-end gap-2">
                          <dd className=" flex justify-end">
                            SubTotal: $ {Math.floor(price += item.price)}
                            </dd> 
              <form>
                <label for="Line1Qty" class="sr-only"> Quantity </label>

                <input
                  type="number"
                  min="1"
                  value="1"
                  id="Line1Qty"
                  class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />
              </form>

              <button class="text-gray-600 transition hover:text-red-600" onClick={() => dispatch(itemActions.deleteItems(item?.id)).then(() => dispatch(itemActions.getAllItems()))}>

                <span class="sr-only ">Remove item</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                  >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                </svg>
              </button>
            </div>
          </li>
                </div>
            <br>
            </br>
          </>
                    ))}
                  

  
            

               
          
      

<div class="mt-8 flex justify-end border-solid border pt-8">
          <div class="w-screen max-w-lg space-y-4">
            <dl class="space-y-0.5 text-sm text-gray-700">
              <div class="flex justify-between text-xl">
                <dt>Subtotal</dt>
                <dd>${Math.ceil(price)}</dd>
              </div>

           

              <div class="flex justify-between text-xl">
                <dt>Total</dt>
                <dd>${Math.ceil(price+(price*.06))}</dd>
              </div>
            </dl>

      </div>
     </div>
<button className="checkout-buttons" onClick={() => Orders()}>Check Out</button>
    </div>


)}


export default Cart