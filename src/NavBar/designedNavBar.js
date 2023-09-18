import { useState } from "react";
import '../pages/Home/testHome.css';
import './designedNavBar.css'
export const NavBar=({setMenuOpen,menuOpen})=>{
    const [cartOpen, setCartOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    return <div id="app">
          <div className="menu">
    <p className="rela-block">menu</p>
  </div>
    <div  className={`rela-block nav-bar ${menuOpen ? 'shifted' : ''}`}>
      <div className="rela-block gutter-container inner-nav-container">
        <div className={`nav-flip top ${searchOpen ? 'active' : ''}`}>
          <div className="abs-center logo link">שילטי הצפון</div>
          <div className={`left ui-icon menu-button ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <svg viewBox="0 0 40 50" className="button-svg">
              <path d="M 7 15 L 33 15" />
              <path d="M 7 25 L 33 25" />
              <path d="M 7 35 L 33 35" />
            </svg>
          </div>
          <div className={`right ui-icon cart-button ${cartOpen ? 'active' : ''}`} onClick={() => setCartOpen(!cartOpen)}>
            <svg viewBox="0 0 50 50" className="button-svg">
              <path d="M 4 8 L 9 8 L 16 33 L 39 33 L 44 13 L 17 13" />
              <circle cx={19} cy={41} r={3} />
              <circle cx={37} cy={41} r={3} />
            </svg>
          </div>
        </div>
        <div className={`nav-flip bottom ${searchOpen ? 'active' : ''}`}>
          <input value={searchInput} type="text" placeholder="Search here..." className="search-bar" />
        </div>
        <div className="vert-center ui-icon search-button" onClick={() => setSearchOpen(!searchOpen)}>
          <svg viewBox="0 0 50 50" className="button-svg">
            <circle cx={20} cy={22} r={12} />
            <path d="M 31 32 L 39 40" />
          </svg>
        </div>
      </div>
    </div>
    </div>
}