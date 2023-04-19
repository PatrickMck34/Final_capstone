import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Home from "./components/Home/home";
import Cart from "./components/Cart/cart";
import * as reviewActions from './store/review'
import ReviewPage from "./components/ReviewPage/review_page"
import Item from './components/Items/Item'
import WishList from "./components/WishList/WishList";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Payment from "./components/Payment/payment";
import Grad from "./components/GRD";

import * as itemActions from "./store/item"
import EditReview from "./components/editReview";
import { useSelector } from "react-redux";
import Checkout from "./components/CheckoutPage/checkoutPage";
const promise = loadStripe("pk_test_51MwXvdCpHaxH8wOovgAPHMwDWQkTgbxUXHv3NYgJNaJSBrThbxAyoPJn6ptH5cRMNVX7nXsWKmxscaY3IYd3K7Ti00jnts2NyZ")

function App() {
  const user = useSelector(state=>state.session.user)
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} />
      {isLoaded && ( */}
        <Switch>
          <Route path="/wish_list">
            <WishList />
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
          <Route path="/payment">
          <Elements stripe={promise}>
             <Payment />
          </Elements>
          </Route>
          <Route path="/review">
            <ReviewPage />
          </Route>
          <Route path="/cart">
         <Cart />
          </Route>
          <Route ecxact path="/">
            <Home />
          </Route>
        </Switch>
      {/* )} */}
    </>
  );
}

export default App;
