import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  
  if (sessionUser) return <Redirect to="/" />;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <img className="signin-logo" src="https://i.postimg.cc/ZYrg8zCH/Simply-Amazin.png"></img>
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
          placeholder="Email"
          type="text"
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
          placeholder="Username"
          type="text"
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
          placeHolder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
        </span>
        </label>
        <label>
        <div className="spacer"></div>
        <span className="signin-option">
          <input
          className="sign-options"
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          />
          </span>
        </label>
        <button className="continue-button" type="submit">Continue</button>
      </form>
          </div>


          </div>
    </>
  );
}

export default SignupFormPage;
