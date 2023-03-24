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

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true)).then(()=>dispatch(reviewActions.getReview()));
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
          <Route ecxact path="/">
            <Home />
          </Route>
        </Switch>
      {/* )} */}
    </>
  );
}

export default App;
