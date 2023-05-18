import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import * as sessionActions from "../../store/session";
import * as itemActions from "../../store/item";
import "./Navigation.css";
import { Link } from "react-router-dom"
import { Demo } from "../../store/session";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  const Demo = (e) => {
    e.preventDefault();
    dispatch(sessionActions.login("123@aa.io", "password"));
    return dispatch(itemActions.getAllItems())
}

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
  
      if (ulRef.current &&!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <button onClick={openMenu}>
      <i class="fa-solid fa-bars"></i>
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>
              <button onClick={handleLogout}>Log Out</button>
            </li>
          </>
        ) : (
          <><Link to={'/login'}>
            <button className="text-xl border-solid border w-40 rounded" > Login </button>
             </Link>

             <Link to={'/signup'}>
            <button className="text-xl border-solid border w-40 rounded" > Sign In </button>
             </Link>

             <button className="text-xl border-solid border w-40 rounded" onClick={Demo}>Demo User</button>
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
