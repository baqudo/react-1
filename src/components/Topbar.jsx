import React from "react";
import { NavLink } from "react-router-dom";
import "../sass/components/topbar.sass";

export default class Topbar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <div className="topbar__inner container">
          <div className="topbar__currency">Currency : GBP </div>
          <ul className="topbar__nav">
            <li>
              <NavLink className="topbar__link" to="/login">Register</NavLink>
            </li>
            <li>
              <NavLink className="topbar__link" to="/login">Sign In</NavLink>
            </li>
            <li>
              <div className="topbar__cart">
                empty   
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

