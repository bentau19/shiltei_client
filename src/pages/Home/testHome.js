import React, { useState, useEffect  } from 'react';
import './testHome.css';
import {HighlightView} from '../Highlight/higlighted'
import { FullViewComp } from '../FullProductView/fullViewComp';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ContactUs from '../ContectUs/contact';
import { AboutUs } from '../AboutUs/aboutUs';
import { TellAboutUS } from '../TellAboutUs/tellAboutUs';
import { Products } from '../Products/products';

const App2=({reviews,menuOpen,items,highlights,setCart,ctags})=> {
    const [productViewOpen, setProductViewOpen] = useState(false);
    const [viewedProduct, setViewedProduct] = useState({});
    const tags = ["הכל", ...ctags];
    const viewProduct = (product) => {
      setViewedProduct(product);
      setProductViewOpen(true);
    };
    function getWindowSize() {
      const {innerWidth, innerHeight} = window;
      return {innerWidth, innerHeight};
    }
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
      window.addEventListener('resize', handleWindowResize);
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);


  return <div id="app">
  <div className={`rela-block page-container ${menuOpen ? 'shifted' : ''}`}>
    <div className="rela-block page-section top-section" style={{paddingTop: "10px"}} >
      <div className=" top-one">
        <HighlightView highlights={highlights} viewProduct={viewProduct} />
      </div>
    </div>
    <Products items={items} viewProduct={viewProduct} tags={tags}/>
    <AboutUs windowSize={windowSize}/>
    <div className="rela-block page-section grey product-section">
      <div className="rela-block gutter-container">
          <h2 id='tellAboutUs' className="right">מספרים עלינו</h2>
        </div>
        <TellAboutUS reviews={reviews}/>
    </div>

    <div className="rela-block page-section new-section">
      <div className="rela-block gutter-container">
        <div className="rela-block section-nav">
          <h2 id='contact' className="right">?יש לך שאלה</h2>
        </div>
        <ContactUs />
        <div className="right-column">
        <div className='rightChild'>
          <a  href = "https://www.google.co.il/maps/place/32%C2%B036'28.1%22N+35%C2%B017'36.5%22E/@32.6078101,35.2960471,17z/data=!3m1!4b1!4m12!1m7!3m6!1s0x151c53c38bc536fb:0xb88126105c8669c7!2z16nXnNeY15kg15TXptek15XXnw!8m2!3d32.6075587!4d35.293445!16s%2Fg%2F1tcx4ch0!3m3!8m2!3d32.6078056!4d35.2934722?entry=ttu"
          >עפולה, קהילת ציון 8</a>
          <a color='black'href = "https://www.google.co.il/maps/place/32%C2%B036'28.1%22N+35%C2%B017'36.5%22E/@32.6078101,35.2960471,17z/data=!3m1!4b1!4m12!1m7!3m6!1s0x151c53c38bc536fb:0xb88126105c8669c7!2z16nXnNeY15kg15TXptek15XXnw!8m2!3d32.6075587!4d35.293445!16s%2Fg%2F1tcx4ch0!3m3!8m2!3d32.6078056!4d35.2934722?entry=ttu"
          ><Icon icon="akar-icons:location" width="30" /></a>
        </div>
        <div className='rightChild'>
          <a style={{display: "inline-block"}} href="tel:04-6527526">04-6527526</a>
          <a color='black' href="tel:04-6527526"><Icon style={{display: "inline-block"}} href="tel:04-6527526" width="30" icon="solar:phone-line-duotone" /></a>
        </div>
        <div className='rightChild'>
          <a style={{display: "inline-block"}} href="tel:04-6196611">04-6196611</a>
          <a color='black' href="tel:04-6196611"><Icon style={{}} icon="cil:fax" width="30" /></a>
        </div>
        <div className='rightChild' >
          <a  href="tel:054-6343811">054-6343811</a>
          <a color='black' href="tel:054-6343811"><Icon icon="bi:phone" width="30" /></a>
        </div>
        <div className='rightChild'>
          <a  href = "mailto: shlatimafula@gmail.com">shlatimafula@gmail.com</a>
          <a color='black'href = "mailto: shlatimafula@gmail.com"><Icon icon="simple-icons:gmail" width="30" /></a>
        </div>
        <h2>צור קשר</h2>
        </div>

    <iframe  src="https://embed.waze.com/iframe?zoom=16&lat=32.607117&lon=35.293713&ct=livemap&pin=1" 
				width={"100%"} height="320"></iframe>
      </div>
    </div>

    <div className="rela-block footer">
    
      <div className="rela-block gutter-container inner-footer-container">
      <NavLink className="logo" style={{visibility:"visible",padding:"10px"}} to="/managerLogin">MANAGEMENT</NavLink>
      </div>
    </div>
  </div> 
  <div className={`product-view-container ${productViewOpen ? 'active' : ''}`}>
     <FullViewComp setProductViewOpen={setProductViewOpen} setViewedProduct={setViewedProduct} viewedProduct={viewedProduct} setCart={setCart}/> 
      </div>
    </div>
}

export default App2;
