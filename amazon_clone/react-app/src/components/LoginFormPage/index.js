import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginForm.css';
import { Link } from "react-router-dom";
import * as sessionActions from '../../store/session'

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(sessionActions.login(email, password));
    if (data) {
      setErrors(data);
    }


  };

  return (
    <>
    <div className="log-logo">
      <img className="login-logo" src="https://i.postimg.cc/rpXrJb4x/amazin-clear.png" alt="loading"></img>
    </div>
    <div className="create-container-log">
    <div className="log-logo">

  <br></br>
          </div>
      <div className="login-title">


      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
            ))}
            </ul>
        {/* <span className="log-option"> */}

        <label>
        
          <input
          className="log-options"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        </label>
            {/* </span>
            <span className="log-option"> */}

        <label>
          <div className="spacer-log"></div>
        
          <input
          className="log-options"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
        </label>
          {/* </span> */}
      </form>
          </div> 
            <button className="continue-button-log" type="submit" onClick={handleSubmit}>Log In</button>
            </div>
            <div className="signup-redirect">

              <span>-Don't Have an Account?-</span>
            <Link to={'/signup'}>
                   <button className='sign-up-redirect' >Create Your Amazin Account
                   </button>
                   </Link>
            </div>
    </>
  );
}

export default LoginFormPage;
