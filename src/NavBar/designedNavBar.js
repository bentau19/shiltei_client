import { useState } from "react";
import '../pages/Home/testHome.css';
import './designedNavBar.css';
import logo from"./shiltei.ico"
import { Cart } from "./Cart/cart";
import { LeftBar } from "../pages/LeftBar/leftBar";
export const NavBar=({setMenuOpen,menuOpen,items,setItems})=>{
    const [cartOpen, setCartOpen] = useState(false);

  
    return <div id="app">
      <LeftBar setMenuOpen={setMenuOpen}/>
    <div  className={`rela-block nav-bar ${menuOpen ? 'shifted' : ''}`}>
      <div className="rela-block gutter-container inner-nav-container">
        <div className={`nav-flip top`}>
          <div className="abs-center logo link">שלטי הצפון</div>
          <div className={`left ui-icon menu-button ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <svg viewBox="0 0 40 50" className="button-svg">
              <path d="M 7 15 L 33 15" />
              <path d="M 7 25 L 33 25" />
              <path d="M 7 35 L 33 35" />
            </svg>
          </div>
          <div className={`right ui-icon cart-button ${cartOpen ? 'active' : ''}`} onClick={() => setCartOpen(!cartOpen)}>
          <div className="circle">{items.length}</div>
            <svg viewBox="0 0 50 50" className="button-svg">
              <path d="M 4 8 L 9 8 L 16 33 L 39 33 L 44 13 L 17 13" />
              <circle cx={19} cy={41} r={3} />
              <circle cx={37} cy={41} r={3} />
            </svg>
          </div>
        </div>
        <img className="navbar_img" src={logo} alt="shiltei" height={"50px"}></img> 

      </div>
    </div>
    <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} items={items} setItems={setItems}/>
    </div>
}