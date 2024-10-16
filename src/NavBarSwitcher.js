import React from 'react';
import { useNavigationContext } from './NavigationContext';
import {NavBar} from './NavBar/designedNavBar';
import ManagerNavBar from './ManagerScreen/navBar/navBar';
import { AccaptanceNav } from './AcceptancePage/acceotanceNav';

const NavBarSwitcher = ({items,setCart,pass,setMenuOpen,menuOpen}) => {
    
  const { navigationBarType } = useNavigationContext();

  return navigationBarType === 'client' ? 
  <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} items={items} setItems={setCart} />
  // <ClientNavBar items={items} setItems={setItems} /> 
  :
  navigationBarType === 'manager'?<ManagerNavBar pass={pass} />:
  <AccaptanceNav/>
};

export default NavBarSwitcher;
