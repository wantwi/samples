import React from "react";

import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideMenu = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <AiIcons.AiFillBulb />,
    cName: "nav-text",
  },
  {
    title: "Report",
    path: "/report",
    icon: <AiIcons.AiFillFile />,
    cName: "nav-text",
  },
];
