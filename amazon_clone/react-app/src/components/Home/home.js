import React from "react";
import "./home.css" 
import Item from "../Items/Item";
function Home(){
    return (
        <div className="home">
            <div className="home-container">
                <img  className="home-banner" src="https://m.media-amazon.com/images/I/719Izgkn1dL._SX3000_.jpg" />
                <div className="home-line">
                     <Item title="Amazon Kindle Fire" price={219.99} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2xs4CcvDoHUKifWct4HZXwQ7C-129lLBrDXaqqH6P-jqVjOD7lEsA_JjFpLey7DUEQ0&usqp=CAU'
                     rating={3}/> 
                     <Item title="KingTool 325 piece Home Repair Toolkit" price={89.99} image='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSMIzb1QnMIefo_pgAguHcB7mW4-amOfwlGyX9XNnR69V2glGhU'
                     rating={5}/>
              <Item title="ASETY Demascus Knife Set 3PCS, NSF Food-Safe Kitchen Knife Set" price={159.00} image='https://lh3.googleusercontent.com/miQ2X_ihAO0OSQt1LeAeMPpczaXCjuu0XxRizkNrgz4Sml6R0GaBISvk33xKXmoxlvIYlbigB7SjCyCQR_HMfqPIZfvrUaTlFzfaQrXX' alt="loading"
                 rating={4}/> 
                    {/*  */}
                </div>
                <div className="home-line">
                    <Item title="Magnetic Levitation Floating Globe" price={38.99} image="https://lh3.googleusercontent.com/DMhhP5hH7DRxaNZ7mTsM6rM_QonIFKU69ejJ9zFaxrnaE8tiHv9SzZa1QV0kWrX-1VT1PIRU0ohu2DrjtqP3UtAKUwYzTJ2s7wl5whWb" alt="loading"
                   rating={4}/> 
                     <Item title="Sleep HeadPhones, White Noise Bluetooth Sleep Mask" price={26.99} image="https://lh3.googleusercontent.com/KEkm8qxAgBCmoON7gNz36NxXkQPORr-5FDw9avhh7GxTVZ1P-8VVJqaPfce8h_923_mVVTUmVB5zG4dxDpz4AXEIN8DpPPe3LMVkUzP_Ig" alt="loading"
                   rating={3}/> 

                    <Item title="AeroBand Electric Air Drum Set Air Drum Sticks" price={199.00} image="https://lh3.googleusercontent.com/y9lBYiWKYCR5OS4zQo0YLm6ju0ygCRMywa4hFeuQ2asrGSjZDval5tUIXs4UEqtegybPhwwGtFn_TTdSeeF902sW7viJNRyPpxS708P1" alt="loading"
                    rating={3}/> 
                </div>
                <div className="home-line">
                   

                </div>
            </div>

        </div>
    )
}
export default Home