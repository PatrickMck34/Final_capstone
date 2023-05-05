import React from "react";
import "./home.css" 
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as itemActions from '../../store/item'
import { Link } from "react-router-dom";
import * as sessionActions from "../../store/session"
import { useSelector } from "react-redux";
import * as reviewActions from '../../store/review'
import AboutModal from "../AboutModal";
import OpenModalButton from "../OpenModalButton";
import * as cartActions from '../../store/cart'


function Home(){

    const user = useSelector(state=>state.session)
    const userId = user?.user?.id
    const items = useSelector(state=>state.items?.allItems)
    const dispatch = useDispatch()
    useEffect(() => {
    
        dispatch(itemActions.getAllItems())
        
       
         
          
      }, [items]);
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
                <img className="home-movie" src="https://i.postimg.cc/gjmkD18x/Banner.jpg"></img>
                <img className="home-logo" src="https://i.postimg.cc/rpXrJb4x/amazin-clear.png" alt="loading"></img>
                <div className="home-line">
                <div className="Item">
            <div className="Item-info">
                <p>{"iBUYPOWER Pro Gaming PC"}</p>
                <p className="Item-price">
                    <small>$</small>
                    <strong>{1698.88}</strong>
                </p>
                <div className="Item-rating">
                    {Array(4)
                    .fill()
                    .map((_, i) => (
                        <i className="fa-solid fa-meteor"></i>
                        ))}
                </div>
            </div>
            <img src={'https://m.media-amazon.com/images/I/81YUHsnzj1L._AC_SL1500_.jpg'} alt="" />
            {user?.user !== null ? (
                    <div>
            <button className="Item-button" onClick={()=>dispatch(itemActions.createItem()).then(()=>window.alert("Item added to cart")).then(()=>dispatch(itemActions.getAllItems()))}>Add To Cart</button>
            <button className="Item-button" onClick={()=>dispatch(cartActions.createCartItem(userId)).then(()=>window.alert("Item added to Wish List!")).then(()=>dispatch(cartActions.getAllCartItems()))}>Add To List</button>
            </div>
            ):(
                <div></div>

            )}
            <Link to={`/review/1`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>
        </div>
        <div className="Item">
            <div className="Item-info">
                <p>{"CyberpowerPC Gamer Xtreme VR Gaming PC"}</p>
                <p className="Item-price">
                    <small>$</small>
                    <strong>{2299.99}</strong>
                </p>
                <div className="Item-rating">
                    {Array(5)
                    .fill()
                    .map((_, i) => (
                        <i className="fa-solid fa-meteor"></i>
                        ))}
                </div>
            </div>
            <img src={'https://m.media-amazon.com/images/I/71Lczneb0VL._AC_SL1500_.jpg'} alt="" />
            {user?.user !== null ? (
                    <div>
            <button className="Item-button" onClick={()=>dispatch(itemActions.createItem2()).then(()=>window.alert("Item added to cart")).then(()=>dispatch(itemActions.getAllItems()))}>Add To Cart</button>
            <button className="Item-button" onClick={()=>dispatch(cartActions.createCartItem2(userId)).then(()=>window.alert("Item added to Wish List!")).then(()=>dispatch(cartActions.getAllCartItems()))}>Add To List</button>
            </div>
            ):(
                <div></div>

            )}
            
            <Link to={`/review/2`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>
        </div>
        <div className="Item">
            <div className="Item-info">
                <p>{"Alienware Aurora R14 Liquid Cooled Gaming Desktop - AMD Ryzen 9"}</p>
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
            <img src={'https://m.media-amazon.com/images/I/713XHpvZRML._AC_SL1500_.jpg'} alt="" />
            {user?.user !== null ? (
                    <div>
            <button className="Item-button" onClick={()=>dispatch(itemActions.createItem3()).then(()=>window.alert("Item added to cart")).then(()=>dispatch(itemActions.getAllItems()))}>Add To Cart</button>
            <button className="Item-button" onClick={()=>dispatch(cartActions.createCartItem3(userId)).then(()=>window.alert("Item added to Wish List!")).then(()=>dispatch(cartActions.getAllCartItems()))}>Add To List</button>
            </div>
            ):(
                <div></div>

            )}
            <Link to={`/review/3`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>
        </div>
        
        
        
        
                </div>
                <div className="home-line">
        <div className="Item">
            <div className="Item-info">
                <p>{"Fly YUTING Gaming Chair, Ergonomic Computer Cockpit Chair with Led Lights"}</p>
                <p className="Item-price">
                    <small>$</small>
                    <strong>{9455.15}</strong>
                </p>
                <div className="Item-rating">
                    {Array(5)
                    .fill()
                    .map((_, i) => (
                        <i className="fa-solid fa-meteor"></i>
                        ))}
                </div>
            </div>
            <img src={"https://m.media-amazon.com/images/I/61OvRdy6n1L._AC_SL1080_.jpg"} alt="" />
            {user?.user !== null ? (
                    <div>
            <button className="Item-button" onClick={()=>dispatch(itemActions.createItem4()).then(()=>window.alert("Item added to cart")).then(()=>dispatch(itemActions.getAllItems()))}>Add To Cart</button>
            <button className="Item-button" onClick={()=>dispatch(cartActions.createCartItem4(userId)).then(()=>window.alert("Item added to Wish List!")).then(()=>dispatch(cartActions.getAllCartItems()))}>Add To List</button>
            </div>
            ):(
                <div></div>

            )}
            <Link to={`/review/4`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>


        </div>
        <div className="Item">
            <div className="Item-info">
                <p>{"YUYTIN Super Deluxe Racing Executive Office Cockpit Gaming Station"}</p>
                <p className="Item-price">
                    <small>$</small>
                    <strong>{19386.38}</strong>
                </p>
                <div className="Item-rating">
                    {Array(5)
                    .fill()
                    .map((_, i) => (
                        <i className="fa-solid fa-meteor"></i>
                        ))}
                </div>
            </div>
            <img src={"https://m.media-amazon.com/images/I/61SZuCXn5hL._AC_SL1200_.jpg"} alt="" />
            {user?.user !== null ? (
                    <div>
            <button className="Item-button" onClick={()=>dispatch(itemActions.createItem5()).then(()=>window.alert("Item added to cart")).then(()=>dispatch(itemActions.getAllItems()))}>Add To Cart</button>
            <button className="Item-button" onClick={()=>dispatch(cartActions.createCartItem5(userId)).then(()=>window.alert("Item added to Wish List!")).then(()=>dispatch(cartActions.getAllCartItems()))}>Add To List</button>
            </div>
            ):(
                <div></div>

            )}
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
            {user?.user !== null ? (
                    <div>
            <button className="Item-button" onClick={()=>dispatch(itemActions.createItem6()).then(()=>window.alert("Item added to cart")).then(()=>dispatch(itemActions.getAllItems()))}>Add To Cart</button>
            <button className="Item-button" onClick={()=>dispatch(cartActions.createCartItem6(userId)).then(()=>window.alert("Item added to Wish List!")).then(()=>dispatch(cartActions.getAllCartItems()))}>Add To List</button>
            </div>
            ):(
                <div></div>

            )}
            <Link to={`/review/6`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>
</div>
                    </div>
                <div className="home-line">
                        <div className="Item">
            <div className="Item-info">
                  
                   

                <p>{"Apple MacBook Pro"}</p>
                <p className="Item-price">
                    <small>$</small>
                    <strong>{1299.00}</strong>
                </p>
                <div className="Item-rating">
                    {Array(5)
                    .fill()
                    .map((_, i) => (
                        <i className="fa-solid fa-meteor"></i>
                        ))}
                </div>
            </div>
            <img src={"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR2PUqIyvxI23vgrWfd84ON-UQhmfKVJaH-ZpZdCIJp0doerwrp2To-D-kejkQIMYHXr5rH7aKXoHj5-_YyJmE0lQ4dOR-P1KL9LJHwuwIhBuK3u32Rq-ea&usqp=CAE"} alt="" />
            {user?.user !== null ? (
                    <div>
            <button className="Item-button" onClick={()=>dispatch(itemActions.createItem6()).then(()=>window.alert("Item added to cart")).then(()=>dispatch(itemActions.getAllItems()))}>Add To Cart</button>
            <button className="Item-button" onClick={()=>dispatch(cartActions.createCartItem(userId)).then(()=>window.alert("Item added to Wish List!")).then(()=>dispatch(cartActions.getAllCartItems()))}>Add To List</button>
            </div>
            ):(
                <div></div>

            )}
            <Link to={`/review7`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>
        </div>
        <div className="Item">
            <div className="Item-info">
                <p>{"Samsung 49-Inch Ultrawide Curved Gaming Monitor"}</p>
                <p className="Item-price">
                    <small>$</small>
                    <strong>{1099.00}</strong>
                </p>
                <div className="Item-rating">
                    {Array(5)
                    .fill()
                    .map((_, i) => (
                        <i className="fa-solid fa-meteor"></i>
                        ))}
                </div>
            </div>
            <img src={"https://image-us.samsung.com/SamsungUS/home/computing/monitors/gaming/12162022/ODYSSEY_NEO_G9_HERO_IMAGE1600x1200.jpg?$product-details-jpg$"} alt="" />
            {user?.user !== null ? (
                    <div>
            <button className="Item-button" onClick={()=>dispatch(itemActions.createItem6()).then(()=>window.alert("Item added to cart")).then(()=>dispatch(itemActions.getAllItems()))}>Add To Cart</button>
            <button className="Item-button" onClick={()=>dispatch(cartActions.createCartItem(userId)).then(()=>window.alert("Item added to Wish List!")).then(()=>dispatch(cartActions.getAllCartItems()))}>Add To List</button>
            </div>
            ):(
                <div></div>

            )}
            <Link to={`/review8`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>
        </div>
        <div className="Item">
            <div className="Item-info">
                <p>{"ASUS ROG Strix G15 Gaming Laptop"}</p>
                <p className="Item-price">
                    <small>$</small>
                    <strong>{1399.00}</strong>
                </p>
                <div className="Item-rating">
                    {Array(5)
                    .fill()
                    .map((_, i) => (
                        <i className="fa-solid fa-meteor"></i>
                        ))}
                </div>
            </div>
            <img src={"https://m.media-amazon.com/images/I/71pWcOnLL+L._AC_SX679_.jpg"} alt="" />
            {user?.user !== null ? (
                    <div>
            <button className="Item-button" onClick={()=>dispatch(itemActions.createItem6()).then(()=>window.alert("Item added to cart")).then(()=>dispatch(itemActions.getAllItems()))}>Add To Cart</button>
            <button className="Item-button" onClick={()=>dispatch(cartActions.createCartItem(userId)).then(()=>window.alert("Item added to Wish List!")).then(()=>dispatch(cartActions.getAllCartItems()))}>Add To List</button>
            </div>
            ):(
                <div></div>

            )}
            <Link to={`/review9`} >
                        <button className="Item-button">See Reviews</button>
                        </Link>
        </div>

                    
                   
                   
                <div>
                    </div>

                    </div>
<OpenModalButton
    modalComponent={AboutModal}
    buttonText="About"></OpenModalButton>
    </div>

        </div>
    )
}
export default Home