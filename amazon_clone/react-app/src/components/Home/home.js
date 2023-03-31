import React from "react";
import "./home.css" 

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as itemActions from '../../store/item'
import { Link } from "react-router-dom";


function Home(){
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(itemActions.getAllItems())
    
     
          
        
      }, [dispatch]);

    return (
        <div className="home">
            <div className="home-container">
                <img  className="home-banner" src="https://m.media-amazon.com/images/I/719Izgkn1dL._SX3000_.jpg" />
                <div className="home-line">

                <div className="Item">
            <div className="Item-info">
                <p>{"Amazon Kindle Fire"}</p>
                <p className="Item-price">
                    <small>$</small>
                    <strong>{299}</strong>
                </p>
                <div className="Item-rating">
                    {Array(4)
                    .fill()
                    .map((_, i) => (
                        <i className="fa-solid fa-meteor"></i>
                    ))}
                </div>
            </div>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2xs4CcvDoHUKifWct4HZXwQ7C-129lLBrDXaqqH6P-jqVjOD7lEsA_JjFpLey7DUEQ0&usqp=CAU'} alt="" />
            <button onClick={()=>dispatch(itemActions.createItem())}>Add To Cart</button>
            <Link to={`/review/${1}`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>
        </div>
        <div className="Item">
            <div className="Item-info">
                <p>{"KingTool 325 piece Home Repair Toolkit"}</p>
                <p className="Item-price">
                    <small>$</small>
                    <strong>{89.99}</strong>
                </p>
                <div className="Item-rating">
                    {Array(5)
                    .fill()
                    .map((_, i) => (
                        <i className="fa-solid fa-meteor"></i>
                    ))}
                </div>
            </div>
            <img src={'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSMIzb1QnMIefo_pgAguHcB7mW4-amOfwlGyX9XNnR69V2glGhU'} alt="" />
            <button onClick={()=>dispatch(itemActions.createItem2())}>Add To Cart</button>
            <Link to={`/review/${1}`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>
        </div>
        <div className="Item">
            <div className="Item-info">
                <p>{"ASETY Demascus Knife Set 3PCS, NSF Food-Safe Kitchen Knife Set"}</p>
                <p className="Item-price">
                    <small>$</small>
                    <strong>{267.00}</strong>
                </p>
                <div className="Item-rating">
                    {Array(5)
                    .fill()
                    .map((_, i) => (
                        <i className="fa-solid fa-meteor"></i>
                    ))}
                </div>
            </div>
            <img src={'https://i.postimg.cc/Zn2MLDYp/knife.jpg'} alt="" />
            <button onClick={()=>dispatch(itemActions.createItem2())}>Add To Cart</button>
            <Link to={`/review/${1}`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>
        </div>
                   
                </div>
                <div className="home-line">
        <div className="Item">
            <div className="Item-info">
                <p>{"Magnetic Levitation Floating Globe"}</p>
                <p className="Item-price">
                    <small>$</small>
                    <strong>{38.99}</strong>
                </p>
                <div className="Item-rating">
                    {Array(4)
                    .fill()
                    .map((_, i) => (
                        <i className="fa-solid fa-meteor"></i>
                    ))}
                </div>
            </div>
            <img src={"https://i.postimg.cc/05DXgZNW/Globe.jpg"} alt="" />
            <button onClick={()=>dispatch(itemActions.createItem4())}>Add To Cart</button>
            <Link to={`/review/${1}`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>
        </div>
        <div className="Item">
            <div className="Item-info">
                <p>{"Sleep HeadPhones, White Noise Bluetooth Sleep Mask"}</p>
                <p className="Item-price">
                    <small>$</small>
                    <strong>{26.99}</strong>
                </p>
                <div className="Item-rating">
                    {Array(3)
                    .fill()
                    .map((_, i) => (
                        <i className="fa-solid fa-meteor"></i>
                    ))}
                </div>
            </div>
            <img src={"https://i.postimg.cc/5NF4Whzc/mask.jpg"} alt="" />
            <button onClick={()=>dispatch(itemActions.createItem5())}>Add To Cart</button>
            <Link to={`/review/${1}`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>
        </div>
        <div className="Item">
            <div className="Item-info">
                <p>{"Samsung - Odyssey Ark 55” LED Curved 4K UHD Gaming Monitor - Black"}</p>
                <p className="Item-price">
                    <small>$</small>
                    <strong>{1999.99}</strong>
                </p>
                <div className="Item-rating">
                    {Array(5)
                    .fill()
                    .map((_, i) => (
                        <i className="fa-solid fa-meteor"></i>
                    ))}
                </div>
            </div>
            <img src={"https://i.postimg.cc/bNzvkCD4/monitor.jpg"} alt="" />
            <button onClick={()=>dispatch(itemActions.createItem6())}>Add To Cart</button>
            <Link to={`/review/${1}`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>
        </div>
                  
                   


                    
                   
                </div>
                <div className="home-line">
                   

                </div>
            </div>

        </div>
    )
}
export default Home