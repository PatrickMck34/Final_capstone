import React from "react";
import "./home.css" 
import Item from "../Items/Item";
import { Link } from "react-router-dom";
function Home(){

    return (
        <div className="home">
            <div className="home-container">
                <img  className="home-banner" src="https://m.media-amazon.com/images/I/719Izgkn1dL._SX3000_.jpg" />
                <div className="home-line">

                     <Item id={1}title="Amazon Kindle Fire" price={219.99} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2xs4CcvDoHUKifWct4HZXwQ7C-129lLBrDXaqqH6P-jqVjOD7lEsA_JjFpLey7DUEQ0&usqp=CAU' alt="loading"
                     rating={3}/> 
<<<<<<< HEAD
                    <Link to="/item/1">Check Details
                     </Link>

                     <Item id={2} title="KingTool 325 piece Home Repair Toolkit" price={89.99} image='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSMIzb1QnMIefo_pgAguHcB7mW4-amOfwlGyX9XNnR69V2glGhU' alt="loading"
                     rating={5}/>
                     <Link to="/item/2">details
                     </Link>

              <Item id={3} title="ASETY Demascus Knife Set 3PCS, NSF Food-Safe Kitchen Knife Set" price={267.00} image='https://i.postimg.cc/Zn2MLDYp/knife.jpg' alt="loading"
                 rating={4}/> 
                     <Link to="/item/3">details
                 </Link>
=======
                   

                     <Item id={2} title="KingTool 325 piece Home Repair Toolkit" price={89.99} image='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSMIzb1QnMIefo_pgAguHcB7mW4-amOfwlGyX9XNnR69V2glGhU' alt="loading"
                     rating={5}/>
                     

              <Item id={3} title="ASETY Demascus Knife Set 3PCS, NSF Food-Safe Kitchen Knife Set" price={267.00} image='https://i.postimg.cc/Zn2MLDYp/knife.jpg' alt="loading"
                 rating={4}/> 
                 
>>>>>>> review
                    {/*  */}
                </div>
                <div className="home-line">
                    <Item id={4} title="Magnetic Levitation Floating Globe" price={38.99} image="https://i.postimg.cc/05DXgZNW/Globe.jpg"
                   rating={4}/> 
<<<<<<< HEAD
                <Link to="/item/4">details
                    </Link>
                     <Item id={5} title="Sleep HeadPhones, White Noise Bluetooth Sleep Mask" price={26.99} image="https://i.postimg.cc/5NF4Whzc/mask.jpg"
                   rating={3}/> 
                <Link to="/item/5">Details
                   </Link>
=======
              
                     <Item id={5} title="Sleep HeadPhones, White Noise Bluetooth Sleep Mask" price={26.99} image="https://i.postimg.cc/5NF4Whzc/mask.jpg"
                   rating={3}/> 
                
>>>>>>> review


                    <Item id={6} title="Samsung - Odyssey Ark 55” LED Curved 4K UHD Gaming Monitor - Black" price={1999.00} image="https://i.postimg.cc/bNzvkCD4/monitor.jpg" alt="loading"
                    rating={3}/>
<<<<<<< HEAD
                   <Link to="/item/6">Details
                     </Link>
=======
                   
>>>>>>> review
                </div>
                <div className="home-line">
                   

                </div>
            </div>

        </div>
    )
}
export default Home