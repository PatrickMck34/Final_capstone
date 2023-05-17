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
 const rev = {review}
  const userName = session?.user?.username

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
    if(review.length < 3) {
      return setErrors(["Review must at least 3 char long"])}
    if(review.length > 50){
      return setErrors(["Review must be 50 char or less"])}
    if(session.user === null){
      return setErrors(["You must be logged in to leave a review"])
    }
    
    
    // if(sessionUser === null) return setErrors(["You Must Be Logged in To Leave a Review"])
    // if(rev.length >2 ) return setErrors(["Review must be 200 char or less"])
   dispatch(reviewActions.createReviews({rev}, itemId, userName )).then(()=>dispatch(reviewActions.getUserReviews(itemId)))
    .then()
    .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
   
      });
    };
    
    return (
      <>
    <div className="log-logo">
      <img className="banner-review" src="https://i.postimg.cc/gjmkD18x/Banner.jpg"></img>
      <img className="login-logo" src="https://i.postimg.cc/rpXrJb4x/amazin-clear.png" alt="loading"></img>

    <div className="reviewContainer">
    <div className="reviewBox"><strong>
      Product Reviews:
      </strong>
      <div className="spacer"></div>

      
    {Object.values(reviews?.allReviews).map((rev, idx) =>(
      <div className="reviewPre">
<i className="fa-solid fa-user"/> <strong>{rev?.user_name}</strong>-says:  {rev?.review}  <div>           
                                    
        </div> 

                        
                            
                      
                           
                            
                           
                           
                           
  {rev.user_name === userName ? (
      <div className="edit-delete-buttons">
  
      <div id="button-edit-container"> 

<OpenModalButton 

buttonText={ 
  <i className="button-edit" class="fa-solid fa-pencil delete" id="mod" >
        </i>
  
  
}
modalComponent={<EditReview rev={rev}/>}
/>
      
       <i class="fa-solid fa-trash" onClick={()=>dispatch(reviewActions.deleteReviews(rev?.id)).then(()=>dispatch(reviewActions.getUserReviews(itemId)))}></i>
               
      </div>
</div>
      ):(
        <div></div>
      )
    }
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
                   <button className='logup-redirect sign' >Create Your Amazin Account
                   </button>
                   </Link>
            </div>
    </>
  );
  
}

export default ReviewPage;
