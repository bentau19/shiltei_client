import React, {  useState,useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from './pages/Home/home';
import {About} from './pages/About/about';
import { Projects } from './pages/Projects/projects';
import {Contact} from './pages/Contact/contact';
import ItemDetail from './productPage/product_page';
import {Route,Routes,BrowserRouter } from "react-router-dom";
import { getItems } from './localStorage';
import { ManagerLogin } from './ManagerScreen/main/login';
import { ManagerHome } from './ManagerScreen/HomeScreen/home';
import { SellScreen } from './ManagerScreen/sellsScreen/sellScreen';
import { NavigationProvider } from './NavigationContext';
import NavBarSwitcher from './NavBarSwitcher';
import BottomBarSwitcher from './BottomBarSwitcher';
import Accaptance from './AcceptancePage/accaptance';
import App2 from './pages/Home/testHome'
import App3 from './pages/Home/storeTest';
import LoadingBall from './loadingBall/loadingBall';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

function App(){
  const [items, setItems] = useState([]);
  const [pass,setPass]=useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    setItems(getItems())
    },[]);

  

  return (
        <div>
            {/* <App2/> */}
              <NavigationProvider>
          <BrowserRouter>
          <NavBarSwitcher items={items} setItems={setItems} pass={pass} setMenuOpen={setMenuOpen} menuOpen={menuOpen} /> 
          <Routes>
            <Route exact path="/" element={
            // <Home setItems={setItems}/>
            <App3 menuOpen={menuOpen} />
            } />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/managerLogin" element={<ManagerLogin setPass={setPass} />} />
            <Route path="/managerHome" element={<ManagerHome/>} />
            <Route path="/managerSells" element={<SellScreen/>} />
            <Route path="/product/:title" element={<ItemDetail />} />
            <Route path="/accaptance/:id/:tradeNumber" element={<Accaptance />} />
          </Routes>
          <BottomBarSwitcher/>
          </BrowserRouter>
          </NavigationProvider>
        </div>
      );
}