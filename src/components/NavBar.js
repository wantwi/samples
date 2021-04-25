import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideMenu } from "./SideMenu";
import { IconContext } from "react-icons";
import "./NavBar.css";
function NavBar() {
  const [Sidebar, setSidebar] = useState(false);

  let showSideBar = () => {
    setSidebar(!Sidebar);
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSideBar} />
          </Link>
        </div>
        <nav className={Sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-nemu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose onClick={showSideBar} />
              </Link>
            </li>
            {SideMenu.map((menu, index) => {
              let { title, icon, cName, path } = menu;
              return (
                <li key={index} className={cName}>
                  <Link to={path} className="menu-bars">
                    {icon}
                    <span>{title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
