import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Home from "./components/Home/home";
import Cart from "./components/Cart/cart";
import ReviewPage from "./components/ReviewPage/review_page"

import WishList from "./components/WishList/WishList";
import Payment from "./components/Payment/payment";
import Orders from "./components/Orders/orders";
import Product from "./components/Product";
import ItemSpec from "./components/ItemSpec/ItemSpec.js";
import Splash from "./components/Splash/Splash";


import Checkout from "./components/CheckoutPage/checkoutPage";


function App() {

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
     
        <Switch>
          <Route path="/wish_list">
            <WishList />
          </Route>
          <Route path="/prev_order">
            <Orders />
          </Route>
      <Route path="/login" >
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SignupFormPage />
      </Route>
        <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/item/:itemId">
            <ItemSpec/>
          </Route>
          <Route path="/payment">
             <Payment />
          </Route>
          <Route path="/review">
            <ReviewPage />
          </Route>
          <Route path="/cart">
         <Cart />
          </Route>
          <Route exact path="/">
            <Splash />
         
          </Route>
        </Switch>
      
    </>
  );
}

export default App;
