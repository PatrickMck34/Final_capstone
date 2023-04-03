import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import './SignupForm.css';
import { Link } from "react-router-dom";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  
  if (sessionUser) return <Redirect to="/" />;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    if(password.length < 6) {
      return setErrors(["Password must be at least 6 char long"])}
    if(password.length > 15){
      return setErrors(["Password must be 15 char or less"])}
    
    
    if (password === confirmPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(['Confirm Password field must be the same as the Password field']);
    }
  };
  
  return (
    <>
    <div className="sign-logo">
    <img className="signin-logo" src="https://i.postimg.cc/rpXrJb4x/amazin-clear.png"></img>
    </div>

    <div className="create-container">
    <div className="signup-logo">
      <h1>Create Account</h1>
    </div>
      <div className="signin-title">


      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label>
<span className="signin-option">
          <input
          className="sign-options"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
         
          </span>
          <div className="spacer"></div>
        </label>
        <label>
        <span className="signin-option">
          <input
          className="sign-options"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          />
        </span>
        </label>
          <div className="spacer"></div>
        <label>
        <span className="signin-option">
          <input
          className="sign-options"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
        </span>
        </label>
       
          <div className="spacer"></div>
          <label>
        <span className="signin-option">
          <input
          className="sign-options"
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
         
          />
        </span>
        </label>
          <div className="spacer"></div>
        <button className="continue-button" type="submit">Continue</button>
      </form>
          </div>


          </div>
          <div className="redirect-container">
             Already Have an Account?

            <Link to={'/login'}>
                   <button className='logup-redirect' >Login to Your Amazin Account
                   </button>
                   </Link>
            </div>
    </>
  );
}

export default SignupFormPage;
