import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarData } from "./SideBarData";
import "./NavBar.scss";
import "./NavBarResponsitivity.scss";

const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <>
      <div className="navbar">
        <Link
          to="#"
          className={!sideBar ? "menu-bars" : "menu-bars active"}
          onClick={showSideBar}
        >
          Menü <FaIcons.FaBars />
        </Link>
      </div>
      <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
        <div className="navbar-toggle">
          <Link to="#" className="menu-bars" onClick={showSideBar}>
            Bezárás <AiIcons.AiOutlineClose />
          </Link>
        </div>
        <div className="menu-points">
          <ul className="nav-menu-items">
            {SideBarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={item.className}
                  onClick={showSideBar}
                >
                  <Link to={item.path}>
                    {/* {item.icon} */}
                    <span className="title">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
