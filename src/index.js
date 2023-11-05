import React, {  useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Route,Routes,BrowserRouter } from "react-router-dom";
import { ManagerLogin } from './ManagerScreen/main/login';
import { ManagerHome } from './ManagerScreen/HomeScreen/home';
import { SellScreen } from './ManagerScreen/sellsScreen/sellScreen';
import { NavigationProvider } from './NavigationContext';
import NavBarSwitcher from './NavBarSwitcher';
import Accaptance from './AcceptancePage/accaptance';
import LoadingPage from './pages/loading/loadingScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

function App(){
  const [items, setItems] = useState([]);
  const [pass,setPass]=useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  

  return (
        <div>
              <NavigationProvider>
          <BrowserRouter>
          {loading?<div/>:<NavBarSwitcher items={items} setCart={setItems} pass={pass} setMenuOpen={setMenuOpen} menuOpen={menuOpen} />}  
          <Routes>
            <Route exact path="/" element={
            <LoadingPage menuOpen={menuOpen} setLoading={setLoading} setCart={setItems} />
            } />
            <Route path="/managerLogin" element={<ManagerLogin setPass={setPass} />} />
            <Route path="/managerHome" element={<ManagerHome/>} />
            <Route path="/managerSells" element={<SellScreen/>} />
            <Route path="/accaptance/:id/:tradeNumber" element={<Accaptance />} />
            <Route path="/:asd" element={<LoadingPage menuOpen={menuOpen} setLoading={setLoading} setCart={setItems} />} />
          </Routes>
          </BrowserRouter>
          </NavigationProvider>
          
        </div>
      );
}