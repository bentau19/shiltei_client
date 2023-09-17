import React from 'react';
import { useNavigationContext } from './NavigationContext';
import ClientNavBar from './NavBar/navBar';
import ManagerNavBar from './ManagerScreen/navBar/navBar';

const NavBarSwitcher = ({items,setItems,pass}) => {
    
  const { navigationBarType } = useNavigationContext();

  return navigationBarType === 'client' ? <ClientNavBar items={items} setItems={setItems} /> :
   <ManagerNavBar pass={pass} />;
};

export default NavBarSwitcher;
