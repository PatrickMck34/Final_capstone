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
import Item from "../Items/Item"
import CartModal from "../Cart/CartModal";
import ProfileButton from "../Navigation/ProfileButton";
import {useModal} from "../../context/Modal"


function Home() {
    const {closeModal} = useModal()
    const user = useSelector(state => state.session)
    const userId = user?.user?.id
    const items = useSelector(state => state.items?.allItems)
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    useEffect(() => {

        dispatch(itemActions.getAllItems())




    }, [items]);
    const Demo = (e) => {
        e.preventDefault();
        dispatch(sessionActions.login("123@aa.io", "password"));
        return dispatch(itemActions.getAllItems())
    }

    const logout = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.setUser(null));

    };
    return (
        <div className="home">
            <div className="home-container bg-gray-900">
                <div className="demo-container  bg-gray-800 ">

                    {user?.user === null ? (
                        <div >
                            <div className=" w-0 ml-auto mr-8 border text-2xl bg-blue-950  text-white  justify-around  flex cursor-pointer">
                           <ProfileButton user={sessionUser} className="cursor-pointer " /> 
                           </div>
                             {/* <NavLink to={'/login'}>
                                <button className='Demo' >Log In
                                </button>
                            </NavLink>
                            <NavLink to={'/signup'}>
                                <button className='Demo' >Sign Up
                                </button>
                            </NavLink> 
                            <button className="Demo" onClick={Demo}>Demo User</button>  */}

                        </div>
                    ) : (
                        <div>
                            <button className="text-xl w-full ml-[45%] text-white" onClick={logout}>Log Out</button>
                        </div>)}

                </div>
                
                {/* <img  className="home-banner" src="https://m.media-amazon.com/images/I/719Izgkn1dL._SX3000_.jpg" /> */}
                
                    <div className="flex">
                        <div className=" bg-blue-900 border border-x-0 border-t-2 border-solid text-3xl  p-3  ">
                            <br></br>
                            <div className="text-white bg-blue-950 mt-3 text-xl m-auto w-52 p-1"> 
                            Early Prime Day Deals!
                            </div>
                            <br></br>
                            <div className="text-white text-center ">

                            Get A New Alienware System As Low As
                            
                            $267!
                            </div>
                                
                            </div>
                        

                <img className="home-movie w-[80%] border border-x-0 border-solid border-t-2 flex  bg-blue-950 " src="https://i.postimg.cc/gjmkD18x/Banner.jpg"></img>
                </div>
                {/* <img className="home-logo h-9 items-center justify-center w-full  " src="https://i.postimg.cc/rpXrJb4x/amazin-clear.png" alt="loading"></img> */}
                <div className="home-line w-full  flex justify-between p-4   ">
                    <div className="Item rounded-lg ">
                        <div className="Item-info ">
                            <p>{"iBUYPOWER Pro Gaming PC"}</p>
                            <p className="Item-price">
                                <small>$</small>
                                <strong>{1698.88}</strong>
                            </p>
                            <div className="Item-rating">
                                {Array(4)
                                    .fill()
                                    .map((_, i) => (
                                        <i className="fa-black fa-solid fa-meteor"></i>
                                    ))}
                            </div>
                        </div>
                         <Link to={"/item/1"}> 

                        <img className="h-44" src={'https://m.media-amazon.com/images/I/81YUHsnzj1L._AC_SL1500_.jpg'} alt="" />
                     </Link> 

                        {user?.user !== null ? (
                            <div>
                                
                                <span className="border border-black border-solid rounded bg-amber-300 ">
                                <OpenModalButton 
             buttonText="Add Item"
             onButtonClick={()=> dispatch(itemActions.createItem())}
              modalComponent={<CartModal num={1}/>}
            />
            </span>
            <br></br>
            <span className="border border-black border-solid rounded bg-amber-300 ">
                                {/* <button className="Item-button" onClick={()=>dispatch(itemActions.createItem()).then(()=>window.alert("Item added to cart")).then(()=>dispatch(itemActions.getAllItems()))}>Add To Cart</button> */}
                                <OpenModalButton 
             buttonText="Add to List"
             onButtonClick={()=> dispatch(cartActions.createCartItem(userId))}
              modalComponent={<CartModal num={1}/>}
            />
            </span>
                                {/* <button className="Item-button" onClick={() => dispatch(cartActions.createCartItem(userId)).then(() => window.alert("Item added to Wish List!")).then(() => dispatch(cartActions.getAllCartItems()))}>Add To List</button> */}
                            </div>
                        ) : (
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
                                        <i className="fa-black fa-solid fa-meteor"></i>
                                    ))}
                            </div>
                        </div>
                        <Link to={"/item/2"}> 
                        <img className="h-44" src={'https://m.media-amazon.com/images/I/71Lczneb0VL._AC_SL1500_.jpg'} alt="" />
                        </Link>
                        {user?.user !== null ? (
                            <div >
                                <span className="border border-black border-solid rounded bg-amber-300 ">

                                <OpenModalButton 
             buttonText="Add Item"
             onButtonClick={()=> dispatch(itemActions.createItem2())}
             modalComponent={<CartModal nums={2} />}
             />
             </span>
              <br></br>
              <span className="border border-black border-solid rounded bg-amber-300">

              <OpenModalButton 
             buttonText="Add to List"
             onButtonClick={()=> dispatch(cartActions.createCartItem2(userId))}
             modalComponent={<CartModal />}
             />
             </span>
                                {/* <button className="Item-button" onClick={() => dispatch(itemActions.createItem2()).then(() => window.alert("Item added to cart")).then(() => dispatch(itemActions.getAllItems()))}>Add To Cart</button> */}
                                {/* <button className="Item-button" onClick={() => dispatch(cartActions.createCartItem2(userId)).then(() => window.alert("Item added to Wish List!")).then(() => dispatch(cartActions.getAllCartItems()))}>Add To List</button> */}
             </div>
                        ) : (
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
                                        <i className="fa-black fa-solid fa-meteor"></i>
                                    ))}
                            </div>
                        </div>
                        
                        <Link to={"/item/3"}>
                            <img className="h-44" src={'https://m.media-amazon.com/images/I/713XHpvZRML._AC_SL1500_.jpg'} alt="" />
                        </Link>
                        {user?.user !== null ? (
                            <div>
                                <span className="border border-black border-solid rounded bg-amber-300">
                                <OpenModalButton
             buttonText="Add Item"
             onButtonClick={()=> dispatch(itemActions.createItem3())}
              modalComponent={<CartModal />}
              />
              </span>
                           
                        <br></br>
                        <span className="border border-black border-solid rounded bg-amber-300">
                        <OpenModalButton 
             buttonText="Add to List"
             onButtonClick={()=> dispatch(cartActions.createCartItem3(userId))}
              modalComponent={<CartModal/>}
            />
            </span>
                                {/* <button className="Item-button" onClick={() => dispatch(cartActions.createCartItem3(userId)).then(() => window.alert("Item added to Wish List!")).then(() => dispatch(cartActions.getAllCartItems()))}>Add To List</button> */}
                            </div>
                        ) : (
                            <div></div>

                        )}
                        <Link to={`/review/3`} >
                            <button className="Item-button">See Reviews</button>
                        </Link>
                    </div>




                </div>
                <div className="home-line w-full  flex justify-between p-4">
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
                                        <i className="fa-black fa-solid fa-meteor"></i>
                                    ))}
                            </div>
                        </div>
                        <Link to={"/item/4"}>

                        <img className="h-44" src={"https://m.media-amazon.com/images/I/61OvRdy6n1L._AC_SL1080_.jpg"} alt="" />
                        </Link>
                        {user?.user !== null ? (
                            <div>
                                <span className="border border-black border-solid rounded bg-amber-300">
                                <OpenModalButton
             buttonText="Add Item"
                            onButtonClick={()=> dispatch(itemActions.createItem4())}
              modalComponent={<CartModal num={4} />}
              />
              </span>
              <br></br>
              
              <span className="border border-black border-solid rounded bg-amber-300">
              <OpenModalButton 
             buttonText="Add to List"
             onButtonClick={()=> dispatch(cartActions.createCartItem4(userId))}
              modalComponent={<CartModal/>}
            />
            </span>
                                {/* <button className="Item-button" onClick={() => dispatch(itemActions.createItem4()).then(() => window.alert("Item added to cart")).then(() => dispatch(itemActions.getAllItems()))}>Add To Cart</button> */}
                                {/* <button className="Item-button" onClick={() => dispatch(cartActions.createCartItem4(userId)).then(() => window.alert("Item added to Wish List!")).then(() => dispatch(cartActions.getAllCartItems()))}>Add To List</button> */}
                            </div>
                        ) : (
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
                                        <i className="fa-black fa-solid fa-meteor"></i>
                                    ))}
                            </div>
                        </div>
                        <Link to={"/item/5"}>

                        <img className="h-44" src={"https://m.media-amazon.com/images/I/61SZuCXn5hL._AC_SL1200_.jpg"} alt="" />
                        </Link>
                        {user?.user !== null ? (
                            <div>
                                <span className="border border-black border-solid rounded bg-amber-300">
                                <OpenModalButton
             buttonText="Add Item"
             onButtonClick={()=> dispatch(itemActions.createItem5())}
              modalComponent={<CartModal num={5} />}

              />
              </span>
              <br></br>
              <span className="border border-black border-solid rounded bg-amber-300">
              <OpenModalButton 
             buttonText="Add to List"
             onButtonClick={()=> dispatch(cartActions.createCartItem5(userId))}
              modalComponent={<CartModal num={1}/>}
            />
            </span>
                                {/* <button className="Item-button" onClick={() => dispatch(itemActions.createItem5()).then(() => window.alert("Item added to cart")).then(() => dispatch(itemActions.getAllItems()))}>Add To Cart</button> */}
                                {/* <button className="Item-button" onClick={() => dispatch(cartActions.createCartItem5(userId)).then(() => window.alert("Item added to Wish List!")).then(() => dispatch(cartActions.getAllCartItems()))}>Add To List</button> */}
                            </div>
                        ) : (
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
                                        <i className="fa-black fa-solid fa-meteor"></i>
                                    ))}
                            </div>
                        </div>
                        <Link to={"/item/6"}>

                        <img className="h-44" src={"https://i.postimg.cc/bNzvkCD4/monitor.jpg"} alt="" />
                        </Link>
                        {user?.user !== null ? (
                            <div>
                                <div>
                                <span className="border border-black border-solid rounded bg-amber-300">
                                <OpenModalButton
             buttonText="Add Item"
             onButtonClick={()=> dispatch(itemActions.createItem6())}
              modalComponent={<CartModal num={6} />}
              />
              </span>
              <br></br>
              <span className="border border-black border-solid rounded bg-amber-300">
              <OpenModalButton 
             buttonText="Add to List"
             onButtonClick={()=> dispatch(cartActions.createCartItem6(userId))}
              modalComponent={<CartModal num={1}/>}
            />
            </span>
              </div>

                                {/* <button className="Item-button" onClick={() => dispatch(itemActions.createItem6()).then(() => window.alert("Item added to cart")).then(() => dispatch(itemActions.getAllItems()))}>Add To Cart</button> */}
                                {/* <button className="Item-button" onClick={() => dispatch(cartActions.createCartItem6(userId)).then(() => window.alert("Item added to Wish List!")).then(() => dispatch(cartActions.getAllCartItems()))}>Add To List</button> */}
                            </div>
                        ) : (
                            <div></div>
                            
                            )}
                        <Link to={`/review/6`} >
                            <button className="Item-button">See Reviews</button>
                        </Link>
                    </div>
                </div>
                            <div className="justify-center text-3xl bg-blue-95
                            +
                            0 text-white text-center w-full ">Additional Products On the Way!</div>
                <div className="home-line w-full  flex justify-between">
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
                                        <i className="fa-black fa-solid fa-meteor"></i>
                                    ))}
                            </div>
                        </div>
                        <Link to={"/item/7"}>

                        <img className="h-44" src={"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR2PUqIyvxI23vgrWfd84ON-UQhmfKVJaH-ZpZdCIJp0doerwrp2To-D-kejkQIMYHXr5rH7aKXoHj5-_YyJmE0lQ4dOR-P1KL9LJHwuwIhBuK3u32Rq-ea&usqp=CAE"} alt="" />
                        </Link>
                        {user?.user !== null ? (
                            <div>
                                Coming Soon!
            <br></br>
                                {/* <button className="Item-button" onClick={() => dispatch(itemActions.createItem6()).then(() => window.alert("Item added to cart")).then(() => dispatch(itemActions.getAllItems()))}>Add To Cart</button> */}
                                
                            </div>
                        ) : (
                            <div></div>

                        )}
                  
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
                                        <i className="fa-black fa-solid fa-meteor"></i>
                                    ))}
                            </div>
                        </div>
                        <Link to={"/item/7"}>

                        <img className="h-44" src={"https://image-us.samsung.com/SamsungUS/home/computing/monitors/gaming/12162022/ODYSSEY_NEO_G9_HERO_IMAGE1600x1200.jpg?$product-details-jpg$"} alt="" />
                        </Link>
                        {user?.user !== null ? (
                            <div>
                                Coming Soon!
                                <br></br>
                                
                            </div>
                        ) : (
                            <div></div>

                        )}
                      
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
                                        <i className="fa-black fa-solid fa-meteor"></i>
                                    ))}
                            </div>
                        </div>
                        <Link to={"/item/8"}>

                        <img className="h-44" src={"https://m.media-amazon.com/images/I/71pWcOnLL+L._AC_SX679_.jpg"} alt="" />
                        </Link>
                        {user?.user !== null ? (
                            <div>
                                Coming Soon!
                                <br></br>
                                
                            </div>
                        ) : (
                            <div></div>

                        )}
                 


                    </div>


                </div>
                      
                <div className="home-line w-full  flex justify-between p-3">
                    <Item
                        name="Dell XPS 13"
                        rating={2}
                        price={1199.99}
                        image="https://i.postimg.cc/DfRRn3cn/dell.jpg">
                            
                    </Item>
                    

                    <Item
                        name="Netgear Nighthawk X10 AD7200"
                        rating={4}
                        price={449.99}
                        image="https://i.postimg.cc/852wQNgY/nighthawk.jpg">
                    </Item>

                </div>
                <div className="home-line w-full  flex justify-between p-3">

                    <Item
                        name="Logitech MX Keys"
                        rating={4}
                        price={99.99}
                        image="https://i.postimg.cc/D0cGjTvL/keyboard.jpg">
                    </Item>



                    <Item
                        name="Logitech MX Master 3"
                        rating={4}
                        price={99.99}
                        image="https://i.postimg.cc/R0cZQTVn/mouse.jpg">
                    </Item>

                    <Item
                        name="Seagate Backup Plus Slim"
                        rating={3}
                        price={84.99}
                        image="https://i.postimg.cc/9FrXN2Q2/seagate.jpg">
                    </Item>

                    <Item
                        name="Logitech StreamCam"
                        rating={4}
                        price={169.99}
                        image="https://i.postimg.cc/qvprHdkg/logitech.jpg">
                    </Item>
                </div>
                <div className="home-line w-full  flex justify-between p-3">


                    <Item
                        name="Nvidia GeForce RTX 3080"
                        rating={4}
                        price={1699.99}
                        image="https://i.postimg.cc/RhTPcy2b/graphics.jpg">
                    </Item>

                    <Item
                        name="Asus ROG Rapture GT-AX11000"
                        rating={4}
                        price={449.99}
                        image="https://i.postimg.cc/gkQhgNdM/router.jpg">
                    </Item>


                    <div>

                    </div>
                    <OpenModalButton
                        modalComponent={AboutModal}
                        buttonText="About"></OpenModalButton>
                </div>

            </div>
            
        </div>
        
    )
}
export default Home