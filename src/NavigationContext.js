import { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const useNavigationContext = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [navigationBarType, setNavigationBarType] = useState('client');

  const toggleNavigationBar = (type) => {
    setNavigationBarType(type);
  };

  return (
    <NavigationContext.Provider value={{ navigationBarType, toggleNavigationBar }}>
      {children}
    </NavigationContext.Provider>
  );
};