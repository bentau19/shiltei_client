import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import { useNavigate } from 'react-router-dom';

const ManagerNavbar = ({pass}) => {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger /> 
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
          <li onClick={()=>navigate("/")}>
            <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={()=>navigate("/managerHome", {state:{managerPass:pass}})}>
            <NavLink to="/managerHome">Products Management</NavLink>
            </li>
            <li onClick={()=>navigate("/managerSells", {state:{managerPass:pass}})}>
            <NavLink to="/managerSells" >Sell List</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};




const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

export default ManagerNavbar;
