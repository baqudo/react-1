import React from "react";
import { Link } from "react-router-dom";
import "../sass/topbar.sass";

export default class Topbar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <div className="topbar__inner">
          <div className="topbar__currency">Currency : GBP </div>
          <div className="topbar__nav">
            <li>
              <Link to="/login">Register</Link>
            </li>
            <li>
              <Link to="/login">Sign In</Link>
            </li>
          </div>

          <div className="topbar__cart">
            empty   
          </div>
        </div>
      </div>
    );
  }
}

