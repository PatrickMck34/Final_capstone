import React from "react";
import "./home.css" 
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as itemActions from '../../store/item'
import { Link } from "react-router-dom";
import * as sessionActions from "../../store/session"
import { useSelector } from "react-redux";


function Home(){

    const user = useSelector(state=>state.session)
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(itemActions.getAllItems())
    
     
          
        
      }, [user]);
      const Demo = (e) => {
        e.preventDefault();
        dispatch(sessionActions.login("123@aa.io","password" ));
       return dispatch(itemActions.getAllItems())       
      }

      const logout = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.setUser(null));
     
      };
    return (
        <div className="home">
            <div className="home-container">
                <div className="demo-container">
                 
                {user?.user === null ? (
                    <div>
                    <NavLink to={'/login'}>
                <button className='Demo' >Log In
                   </button>
                   </NavLink>
                <NavLink to={'/signup'}>
                   <button className='Demo' >Sign Up
                   </button>
                   </NavLink>
<button className="Demo" onClick={Demo}>Demo User</button>
               
                        </div>
                   ):(
                       <div>
<button className="Demo" onClick={logout}>Log Out</button>
                    </div>)}

                </div>
                {/* <img  className="home-banner" src="https://m.media-amazon.com/images/I/719Izgkn1dL._SX3000_.jpg" /> */}
<iframe className="home-movie"  width="1600" height="315" src="https://m.media-amazon.com/images/I/A1FOjpZM7BL.mp4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
            <Link to={`/review/1`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>
        </div>
        <div className="Item">
            <div className="Item-info">
                <p>{"KingTool 325 piece Home Repair Toolkit"}</p>
                <p className="Item-price">
                    <small>$</small>
                    <strong>{89}</strong>
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
            <Link to={`/review/2`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>
        </div>
        <div className="Item">
            <div className="Item-info">
                <p>{"ASETY Demascus Knife Set 3PCS, NSF Food-Safe Kitchen Knife Set"}</p>
                <p className="Item-price">
                    <small>$</small>
                    <strong>{267}</strong>
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
            <button onClick={()=>dispatch(itemActions.createItem3())}>Add To Cart</button>
            <Link to={`/review/3`} >
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
                    <strong>{39}</strong>
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
            <Link to={`/review/4`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>
        </div>
        <div className="Item">
            <div className="Item-info">
                <p>{"Sleep HeadPhones, White Noise Bluetooth Sleep Mask"}</p>
                <p className="Item-price">
                    <small>$</small>
                    <strong>{27}</strong>
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
            <Link to={`/review/5`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>
        </div>
        <div className="Item">
            <div className="Item-info">
                <p>{"Samsung - Odyssey Ark 55” LED Curved 4K UHD Gaming Monitor - Black"}</p>
                <p className="Item-price">
                    <small>$</small>
                    <strong>{2000}</strong>
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
            <Link to={`/review/6`} >
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