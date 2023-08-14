import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from './pages/Home/home';
import {About} from './pages/About/about';
import { Projects } from './pages/Projects/projects';
import {Contact} from './pages/Contact/contact';
import Navbar from './NavBar/navBar';
import {Route,Routes,BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

function App(){
    return (
        <div>
          <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          </BrowserRouter>
        </div>
      );
}