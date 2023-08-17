import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from './pages/Home/home';
import {About} from './pages/About/about';
import { Projects } from './pages/Projects/projects';
import {Contact} from './pages/Contact/contact';
import Navbar from './NavBar/navBar';

import {Route,Routes,BrowserRouter } from "react-router-dom";
import { getItems } from './localStorage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

function App(){
  const [items, setItems] = useState(getItems());
  useEffect(()=>{
    console.log(items)
  },[items])
  return (
        <div>
          <BrowserRouter>
          <Navbar items={items} setItems={setItems}/>
          <Routes>
            <Route exact path="/" element={<Home items={items} setItems={setItems}/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          </BrowserRouter>
        </div>
      );
}