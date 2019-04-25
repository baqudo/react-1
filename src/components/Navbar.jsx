import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "../sass/navbar.sass";

export default function Nav() {
  const navList = [
    {
      url: "/catalog",
      title: "womens"
    },
    {
      url: "/catalog",
      title: "mens"
    },
    {
      url: "/brand",
      title: "the brand"
    },
    {
      url: "/local-stores",
      title: "local stores"
    },
    {
      url: "/look-book",
      title: "look book"
    }
  ];

  return (
    <nav className="nav">
      <div className="nav__inner">
        <div className="nav__logo">
          <Logo />
        </div>

        <ul className="nav__list">
          {navList.map((item, index) => {
            return (
              <li className="nav__item" key={index}>
                <NavLink
                  exact
                  className="nav__link"
                  activeClassName="is-active"
                  to={item.url}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
