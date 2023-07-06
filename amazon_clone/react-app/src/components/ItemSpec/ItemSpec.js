import React from 'react'
import Product from '../Product'
import { useParams } from 'react-router-dom'


import OpenModalButton from "../../components/OpenModalButton";
import { useDispatch } from "react-redux";
import * as itemActions from '../../store/item'
import CartModal from "../Cart/CartModal";





import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import * as cartActions from '../../store/cart'


import {useModal} from "../../context/Modal"



const ItemSpec = ( ) => {
    const {closeModal} = useModal()
    const user = useSelector(state => state.session)
    const userId = user?.user?.id
    const items = useSelector(state => state.items?.allItems)
   
    const sessionUser = useSelector(state => state.session.user);
  const dispatch= useDispatch()
    const {itemId} = useParams()
    console.log(itemId)
    if(itemId === "1") {
        return (
            <div>
                <Product title="iBUYPOWER Pro Gaming PC"
                description="Experience the ultimate gaming performance with the CYBERPOWERPC Gamer Supreme Liquid Cool Black gaming desktop. Powered by an Intel Core i9-13900KF processor and NVIDIA GeForce RTX 4070 graphics card, this gaming desktop is designed to handle even the most demanding games on the market. A massive 32GB RAM allows you to multitask with ease, while the lightning-fast 2TB SSD ensures quick load times for your most used games and applications."
                image={'https://m.media-amazon.com/images/I/81YUHsnzj1L._AC_SL1500_.jpg'}
                price={1698.88}
                rating={4} 
                id={itemId}/>
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
            
        )

    }
    if(itemId === "2") {
        return (
            <div>
                <Product title="CyberpowerPC Gamer Xtreme VR Gaming PC"
                description=" Destroy the competition with the CYBERPOWERPC Gamer Xtreme series of gaming desktops. The Gamer Xtreme series features the latest generation of high performance Intel Core processors and ultra-quick DDR RAM to easily handle system-intensive tasks, such as high definition video playback and gaming. Coupled with powerful discreet video cards, the Gamer Xtreme series provides a smooth gaming and multimedia experience."
                image={'https://m.media-amazon.com/images/I/71Lczneb0VL._AC_SL1500_.jpg'}
                price={2299.99}
                rating={4} />
                {user?.user !== null ? (
                            <div>
                                
                                <span className="border border-black border-solid rounded bg-amber-300 ">
                                <OpenModalButton 
             buttonText="Add Item"
             onButtonClick={()=> dispatch(itemActions.createItem2())}
              modalComponent={<CartModal num={2}/>}
            />
            </span>
            <br></br>
            <span className="border border-black border-solid rounded bg-amber-300 ">
                                {/* <button className="Item-button" onClick={()=>dispatch(itemActions.createItem()).then(()=>window.alert("Item added to cart")).then(()=>dispatch(itemActions.getAllItems()))}>Add To Cart</button> */}
                                <OpenModalButton 
             buttonText="Add to List"
             onButtonClick={()=> dispatch(cartActions.createCartItem2(userId))}
              modalComponent={<CartModal num={2}/>}
            />
            </span>
                                {/* <button className="Item-button" onClick={() => dispatch(cartActions.createCartItem(userId)).then(() => window.alert("Item added to Wish List!")).then(() => dispatch(cartActions.getAllCartItems()))}>Add To List</button> */}
                            </div>
                        ) : (
                            <div></div>

                        )}
                        <Link to={`/review/2`} >
                            <button className="Item-button">See Reviews</button>
                        </Link>
                    </div>
            
        )

            
        

    }
    if(itemId === "3") {
        return (
            <div>
                <Product title="Alienware Aurora R14 Liquid Cooled Gaming Desktop - AMD Ryzen 9"
                description="POWERFUL PERFORMANCE: The Alienware Aurora R14 Ryzen Edition Gaming Desktop PC was designed to empower gamers seeking computer and graphics horsepower with 12-core AMD Ryzen processors.Chassis options : Dark side of the Moon 1000W Platinum Power Supply, Advanced CPU Liquid Cooler & Clear Side Panel..Hard Drive Rotational Speed : ‎7200 RPM
                NO WORLD IS TOO BIG: Power through your favorite games or edit your favorite maps seamlessly with 32GB 3466Mhz XMP overclockable DDR4 memory
                THE LATEST TECH: PCI-Express 4.0 provides graphics, storage drives and networking adapters greater bandwidth so that every component in this gaming desktop performs at their highest level
                UPGRADED CHASSIS: A new chassis based on the Legend Industrial Design allows for liquid cooling and efficient airflow to reduce CPU temperatures with whisper-quiet operation
                 "
                image={'https://m.media-amazon.com/images/I/713XHpvZRML._AC_SL1500_.jpg'}
                price={267}
                rating={5} />
                {user?.user !== null ? (
                            <div>
                                
                                <span className="border border-black border-solid rounded bg-amber-300 ">
                                <OpenModalButton 
             buttonText="Add Item"
             onButtonClick={()=> dispatch(itemActions.createItem3())}
              modalComponent={<CartModal num={3}/>}
            />
            </span>
            <br></br>
            <span className="border border-black border-solid rounded bg-amber-300 ">
                                {/* <button className="Item-button" onClick={()=>dispatch(itemActions.createItem()).then(()=>window.alert("Item added to cart")).then(()=>dispatch(itemActions.getAllItems()))}>Add To Cart</button> */}
                                <OpenModalButton 
             buttonText="Add to List"
             onButtonClick={()=> dispatch(cartActions.createCartItem3(userId))}
              modalComponent={<CartModal num={3}/>}
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
            
        )

          

    }
    if(itemId === "4") {
        return (
            <div>
                <Product title="Fly YUTING Gaming Chair, Ergonomic Computer Cockpit Chair with Led Lights"
                description="SCORPION GAME CHAIR:Scorpion-shaped computer cockpit game chair, made for professional players and office workers. Up to 3screens can be hung, color RGB light strips are built-in in the cockpit
                ERGONOMIC DESIGN: Computer cockpit game chair, various postures, electric adjustment. You can sit upright, sit with a grip, half-lying, lying down and many other positions. Keep you comfortable after long hours of work or work
                MATERIAL: High-quality PU leather, very comfortable texture, long service life; thick steel frame, more solid and stable
                WIDELY USED: This gaming chair is very suitable for you to play computer games, watch TV, work and rest. It will make your space more modern and elegant
                SATISFACTION GUARANTEE: We provide complete customer satisfaction, our customers are more important than our sales. If you are not satisfied with the purchase. Contact us directly and we will serve you. We are happy to help you"
                image={"https://m.media-amazon.com/images/I/61OvRdy6n1L._AC_SL1080_.jpg"}
                price={9455.15}
                rating={5} />
                {user?.user !== null ? (
                            <div>
                                
                                <span className="border border-black border-solid rounded bg-amber-300 ">
                                <OpenModalButton 
             buttonText="Add Item"
             onButtonClick={()=> dispatch(itemActions.createItem4())}
              modalComponent={<CartModal num={4}/>}
            />
            </span>
            <br></br>
            <span className="border border-black border-solid rounded bg-amber-300 ">
                                {/* <button className="Item-button" onClick={()=>dispatch(itemActions.createItem()).then(()=>window.alert("Item added to cart")).then(()=>dispatch(itemActions.getAllItems()))}>Add To Cart</button> */}
                                <OpenModalButton 
             buttonText="Add to List"
             onButtonClick={()=> dispatch(cartActions.createCartItem4(userId))}
              modalComponent={<CartModal num={4}/>}
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
            
        )

      

    }
    if(itemId === "5") {
        return (
            <div>

                <Product title="YUYTIN Super Deluxe Racing Executive Office Cockpit Gaming Station"
                description='
                More Luxury and More comfortable:Equipped with Luxury feeling reclining chair made with high density Mold Shaping Foam and superior quality PU leather with very comfortable texture, electrical recline to 128 degree ,and more to 160 degree for flat position for user.
                Versatile Monitor Mount:Themonitor mounts allows the use of a single monitor up to Ultra wide 49` or 43` in size or triple monitor setups up to 3 x29`
                Capacity:User: 275 lbs max. User Height up to 65".
                More care and More healthy:Monitors distance adjustable from 27" to 34" makes a healthy & more comfortable viewing
                More Leisure:Have cup holders on the armrests for beers/coffee/ashtray etc...& have side cabinets under armrest that can be opened.'
                image={"https://m.media-amazon.com/images/I/61SZuCXn5hL._AC_SL1200_.jpg"}
                price={19386.38}
                rating={5} />
                {user?.user !== null ? (
                            <div>
                                
                                <span className="border border-black border-solid rounded bg-amber-300 ">
                                <OpenModalButton 
             buttonText="Add Item"
             onButtonClick={()=> dispatch(itemActions.createItem5())}
              modalComponent={<CartModal num={5}/>}
            />
            </span>
            <br></br>
            <span className="border border-black border-solid rounded bg-amber-300 ">
                                {/* <button className="Item-button" onClick={()=>dispatch(itemActions.createItem()).then(()=>window.alert("Item added to cart")).then(()=>dispatch(itemActions.getAllItems()))}>Add To Cart</button> */}
                                <OpenModalButton 
             buttonText="Add to List"
             onButtonClick={()=> dispatch(cartActions.createCartItem5(userId))}
              modalComponent={<CartModal num={5}/>}
            />
            </span>
                                {/* <button className="Item-button" onClick={() => dispatch(cartActions.createCartItem(userId)).then(() => window.alert("Item added to Wish List!")).then(() => dispatch(cartActions.getAllCartItems()))}>Add To List</button> */}
                            </div>
                        ) : (
                            <div></div>

                        )}
                        <Link to={`/review/5`} >
                            <button className="Item-button">See Reviews</button>
                        </Link>
                    </div>
            
        )

     
    }
    if(itemId === "6") {
        return (
            <div>
                <Product title="Samsung - Odyssey Ark 55” LED Curved 4K UHD Gaming Monitor - Black"
                description="
                Kickstart your immersive journey with the Samsung Odyssey Ark – a new frontier in gaming and so much more. Spanning a grand 55” and curved to the shape of the human eye, the Ark screen can be rotated into landscape or Cockpit Mode for your optimal display setup. Your keys to victory over lag are a 165Hz refresh rate and 1ms (GTG) response time, while variable refresh rate with AMD FreeSync Premium Pro is the team-up you need to tear up the racetrack, not your screen. Whether you’re exploring new lands in your favorite dungeon crawler, tossing Bits at your favorite streamer, or watching your 10th episode on Netflix, our Quantum Mini-LED and Sound Dome technology with Dolby Atmos produce a perfect viewing experience with stellar picture quality and immersive surround sound. Enjoy multiple content sources all on one screen – it’s all possible with one touch on the model-exclusive Ark Dial."
                image={"https://i.postimg.cc/bNzvkCD4/monitor.jpg"}
                price={2000}
                rating={5} />
                {user?.user !== null ? (
                            <div>
                                
                                <span className="border border-black border-solid rounded bg-amber-300 ">
                                <OpenModalButton 
             buttonText="Add Item"
             onButtonClick={()=> dispatch(itemActions.createItem6())}
              modalComponent={<CartModal num={6}/>}
            />
            </span>
            <br></br>
            <span className="border border-black border-solid rounded bg-amber-300 ">
                                {/* <button className="Item-button" onClick={()=>dispatch(itemActions.createItem()).then(()=>window.alert("Item added to cart")).then(()=>dispatch(itemActions.getAllItems()))}>Add To Cart</button> */}
                                <OpenModalButton 
             buttonText="Add to List"
             onButtonClick={()=> dispatch(cartActions.createCartItem6(userId))}
              modalComponent={<CartModal num={6}/>}
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
            
        )

        

    }
    else {
        return(
        <div>
            Product Coming Soon!
        </div>
        )
    }

}
export default ItemSpec