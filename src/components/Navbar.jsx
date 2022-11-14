import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  //   function showHide() {
  //     const nav = document.querySelector("menu h3");
  //     nav.classList.toggle("slide");
  //   }
  return (
    <nav>
      <div className="logo">
        <h3>farrah fahira</h3>
      </div>
      <div className="menu">
        <NavLink className="link" to={"/"}>
          <h3>HOME</h3>
        </NavLink>
        <NavLink className="link" to={"/about"}>
          <h3>ABOUT</h3>
        </NavLink>
        <NavLink className="link" to={"/blog"}>
          <h3>BLOG</h3>
        </NavLink>
        <NavLink className="link" to={"/portfolio"}>
          <h3>PORTFOLIO</h3>
        </NavLink>
      </div>

      {/* <div className="menu-toggle">
        <input type="checkbox" onClick={showHide}/></input>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
    </nav>
  );
};

export default Navbar;
