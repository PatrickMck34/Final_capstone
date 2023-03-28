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
import Items from './components/ItemDetails/itemDetails'
import * as itemActions from "./store/item"
import EditReview from "./components/editReview";

import { useSelector } from "react-redux";

function App() {
  const reviews = useSelector(state=>state.reviews)
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true)).then(()=> dispatch(itemActions.getAllItems()));
  }, [dispatch]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} />
      {isLoaded && ( */}
        <Switch>
          <Route path="/review">
            <ReviewPage />
          </Route>
          <Route path="/cart">
         <Cart />
          </Route>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/item/:itemId">
            <Items Item={Item}/>
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
