import React from 'react';
import { useNavigationContext } from './NavigationContext';
import { BottomBarClient, BottomBarManager } from './BottomBar/BottomBar';


const BottomBarSwitcher = () => {
    
  const { navigationBarType } = useNavigationContext();

  return navigationBarType === 'client' ? <div/> :
   <BottomBarManager />;
};

export default BottomBarSwitcher;
