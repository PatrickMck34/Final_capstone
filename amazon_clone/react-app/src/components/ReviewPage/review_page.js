import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './review.css';
import { Link } from "react-router-dom";
import * as reviewActions from '../../store/review'
import { useEffect } from "react";


function ReviewPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [review, setReview] = useState("");
  const [errors, setErrors] = useState([])
  const num = (window.location.href.length - 1)
    const  itemId = (window.location.href[num])
  const item = useSelector(state => state.items)
  const reviews = useSelector(state => state.review)

  // const id = sessionUser.id
  console.log(reviews)

  
  useEffect(() => {
    if(sessionUser === null){
    dispatch(reviewActions.getUserReviews(itemId))
    };
    if(!!sessionUser){
      dispatch(reviewActions.getUserReviews(itemId))
      };
  }, [dispatch]);
//   if (!!sessionUser) return window.alert("You must be logged in to leave a review")

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    dispatch(reviewActions.createReviews({review}))
  
    .then()
    .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
   
      });
  };

  return (
    <>
    <div className="log-logo">
      <img className="login-logo" src="https://i.postimg.cc/rpXrJb4x/amazin-clear.png" alt="loading"></img>

    <div className="reviewContainer">
    <div className="reviewBox">Product Reviews:
    {Object.values(reviews.allReviews).map((rev, idx) =>(
      
      <div className="reviewList">{rev.review}
      <pre>

      <i class="fa-solid fa-user">   {rev.userId}</i>
      </pre>
      </div>
  
      
      ))}
      </div>
      </div>
      </div>
    <div className="create-container-log">
    <div className="log-logo">

      <h1>Create A Review</h1>
          </div>
      <div className="login-title">


      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            
            </ul>
        <span className="log-option">

        <label>
        
          <input
          className="log-options"
          type="text"
          placeholder="Write something nice, or not"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
          />
        </label>
            </span>
            <span className="log-option">

     
          <div className="spacer-log"></div>
        
        
          </span>
      </form>
          </div> 
            <button className="continue-button-log" onClick={handleSubmit} type="submit">Submit Review</button>
            </div>
            <div className="signup-redirect">

              <span>Don't Have an Account?</span>
            <Link to={'/signup'}>
                   <button className='nav-option2' >Create Your Amazin Account
                   </button>
                   </Link>
            </div>
    </>
  );
}

export default ReviewPage;
