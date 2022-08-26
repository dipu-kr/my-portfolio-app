import React, { useState } from "react";
import "../css/navbar.css";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const menuControl = () => {
    setMenu(!menu);
  };

  return (
    <nav className="nav-main">
      <div className="logo-div">
        <h2 className="logo">D</h2>
      </div>
      <div className="menu-div" onClick={menuControl}>
        {menu ? (
          <AiOutlineClose className="close-icon" />
        ) : (
          <AiOutlineMenuFold className="open-icon" />
        )}
      </div>
      <ul className={menu ? "openMenu" : "openMenu closeMenu"}>
        <Link to="#about">
          <li onClick={menuControl}>About</li>
        </Link>
        <Link to="#skills">
          <li onClick={menuControl}>Skills</li>
        </Link>
        <Link to="#projects">
          <li onClick={menuControl}>Projects</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
