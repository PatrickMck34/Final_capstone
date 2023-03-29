import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './review.css';
import { Link } from "react-router-dom";
import * as reviewActions from '../../store/review'
import { useEffect } from "react";
import * as itemActions from '../../store/item'
import OpenModalButton from "../OpenModalButton";
import EditReview from "../editReview";


function ReviewPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const session = useSelector(state=>state.session)
  const [review, setReview] = useState("");
  const [errors, setErrors] = useState([])
  const num = (window.location.href.length - 1)
  const  itemId = (window.location.href[num])
  const item = useSelector(state => state.items)
  const reviews = useSelector(state => state.review)
 
  

  // const id = sessionUser.id
 


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
    setErrors([]);
    // if(sessionUser) return setErrors(["You Must Be Logged in To Leave a Review"])
    dispatch(reviewActions.createReviews({review, itemId}))

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
    <div className="reviewBox"><strong>
      Product Reviews:
      </strong>
      <div className="spacer"></div>

      <div><i className="fa-solid fa-user"/>demo says: Heck of a tool</div>
      <div className="spacer"></div>

      <div><i className="fa-solid fa-user"/>Carl says: Had better</div>
      <div className="spacer"></div>
      <div><i className="fa-solid fa-user"/>Joy says: Good luck!</div>
    {Object.values(reviews?.allReviews).map((rev, idx) =>(
      <pre className="reviewPre">
      <i className="fa-solid fa-user"/>                    {session?.user?.username}:                                                                               {rev?.review} 
       <div>           
                                          

      
                        <OpenModalButton
                            buttonText="edit"
              
                                 modalComponent={<EditReview />}
              /> 
       
               <button onClick={()=>dispatch(reviewActions.deleteReviews(rev?.id)).then(()=>dispatch(reviewActions.getUserReviews(itemId)))}>Delete</button>
        </div>
      </pre>
  
      
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
            <button className="continue-button-log" type="submit">Submit Review</button>
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
