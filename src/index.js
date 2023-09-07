import React, {  useState,useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from './pages/Home/home';
import {About} from './pages/About/about';
import { Projects } from './pages/Projects/projects';
import {Contact} from './pages/Contact/contact';
import Navbar from './NavBar/navBar';
import ItemDetail from './productPage/product_page';
import {Route,Routes,BrowserRouter } from "react-router-dom";
import { getItems } from './localStorage';
import { BottomBar } from './BottomBar/BottomBar';
import { ManagerLogin } from './ManagerScreen/main/login';
import { ManagerHome } from './ManagerScreen/HomeScreen/home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

function App(){
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems().then((res)=>{
      setItems(res);
    })
    },[]);

  

  return (
        <div>
          <BrowserRouter>
          <Navbar items={items} setItems={setItems}/>
          <Routes>
            <Route exact path="/" element={<Home items={items} setItems={setItems}/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/managerLogin" element={<ManagerLogin/>} />
            <Route path="/managerHome" element={<ManagerHome/>} />
            <Route path="/product/:title" element={<ItemDetail />} />
          </Routes>
          <BottomBar/>
          </BrowserRouter>
        </div>
      );
}