import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink className={({isActive}) => (isActive? "active" :"" )} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive? "active" :"" )} to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive? "active" :"" )} to="/user">Users</NavLink>
        </li>
      </ul>
    </div>
  );
}
