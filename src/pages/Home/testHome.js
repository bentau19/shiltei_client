import React, { useState, useEffect  } from 'react';
import './testHome.css';
import LoadingBall from '../../loadingBall/loadingBall';
import {HighlightView} from './higlighted'
import { ProductComp } from './HomeComp/ProductComp';
import { FullViewComp } from './HomeComp/fullViewComp';
import { NavLink } from 'react-router-dom';
import rightImg from './aboutUsRight.png';
import leftImg from './aboutUsLeft.png';
import { Icon } from '@iconify/react';
import ContactUs from './contectUs/contact';

const App2=({menuOpen,items,highlights,setCart,ctags})=> {
    const [productViewOpen, setProductViewOpen] = useState(false);
    const [currentViewedProduct, setCurrentViewedProduct] = useState(0);
    const [viewedProduct, setViewedProduct] = useState({});
    const [newItems, setNewItems] = useState([]);
    const [newItemPos, setNewItemPos] = useState(0);
    const [products, setProducts] = useState([
        {
            id: -1,
            name: "Test",
            artist: "Test",
            desc: "",
            cost: 0,
            tags: "Test",
            img: "https://picsum.photos/600/?random",
            date: "0"
        },
      // Rest of your products
    ]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [displayPos, setDisplayPos] = useState(0);
    const tags = ["All", ...ctags];
    const [currenttags, setCurrenttags] = useState("All");
    function getWindowSize() {
      const {innerWidth, innerHeight} = window;
      return {innerWidth, innerHeight};
    }
    const [windowSize, setWindowSize] = useState(getWindowSize());
    console.log(windowSize)
    useEffect(() => {
      function handleWindowResize() {
        
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
    useEffect(() => {
    setDisplayedProducts([...items])
      init();
    }, []);
    useEffect(() => {
      updateDisplayedProducts();
    }, [filteredProducts]); 
  
    const init = () => {
      updateNewItems();
      updateFilteredProducts();
      addDisplayedProducts();
    };
  
    const updateNewItems = () => {
      const arr = [...products.slice(1)]; // Remove the test product
      arr.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
      const newItemsArr = [];
      for (let i = 0; i < 10 && i < arr.length; i++) {
        newItemsArr.push(arr[i]);
      }
      setNewItems(newItemsArr);
    };
  
    const updateNewItemPos = (num) => {
      let newPos = newItemPos + num;
      if (newPos < 0) {
        newPos = 0;
      }
      if (newItems.length > 1 && newPos > newItems.length - 1) {
        newPos = newItems.length - 1;
      }
      setNewItemPos(newPos);
    };
  
    const updateFilteredProducts = async() => {
      const filtered = items.filter(
        (el) => el.tags === currenttags || currenttags === "All"
      );
      console.log(filtered)
      setFilteredProducts([...filtered])
      console.log(filteredProducts)

    };
  
    const updateDisplayedProducts = () => {
      const display = [];
      setDisplayPos(0);
      addDisplayedProducts();
    };
  
    const addDisplayedProducts = () => {
      if (filteredProducts.length - displayPos <= 12) {
        console.log(filteredProducts)
        setDisplayedProducts([...filteredProducts]);
        setDisplayPos(filteredProducts.length);
      } else {
        const newDisplay = [...displayedProducts];
        for (
          let i = 0;
          i < (displayPos === 0 ? 13 : 12);
          i++
        ) {
          newDisplay.push(filteredProducts[i + displayPos]);
        }
        setDisplayedProducts(newDisplay);
        setDisplayPos(displayPos + (displayPos === 0 ? 13 : 12));
      }
    };
  
    const updateViewedProduct = () => {
      const viewed = items.filter((el) => el.id === currentViewedProduct)[0];
      setViewedProduct(viewed);
    };
  
    const viewProduct = (product) => {
      setViewedProduct(product);
      setProductViewOpen(true);
    };

  return <div id="app">
  <div className={`rela-block page-container ${menuOpen ? 'shifted' : ''}`}>
    <div className="rela-block page-section top-section" style={{paddingTop: "10px"}} >
      <div className=" top-one">
        <HighlightView highlights={highlights} viewProduct={viewProduct} />
      </div>
    </div>
    <div className="rela-block page-section grey product-section">
      <div className="rela-block gutter-container">
        <div className="rela-block section-nav">
          <h2 className="left">All Products<span>{currenttags !== 'All' ? `/${currenttags}` : ''}</span></h2>
          <div className="right category-select">
            {tags.map((c) => (
              <div key={c} className={`rela-inline category ${currenttags === c ? 'active' : ''}`} onClick={() => { setCurrenttags(c); updateFilteredProducts(); }}>{c}</div>
            ))}
          </div>
        </div>
        <div className="rela-block product-item-container">
          {displayedProducts.map((item, index) => (
            <ProductComp key={index} info={item} view={viewProduct} />
          ))}
        </div>
        {displayPos < filteredProducts.length && (
          <div className="rela-block load-button">
            <div className="rela-inline load-button-container" onClick={addDisplayedProducts}>
              <p>Load More</p>
              <svg viewBox="0 0 50 50" className="button-svg">
                <path />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>

    <div className="rela-block page-section new-section">
      <div className="rela-block gutter-container">
        <div className="rela-block section-nav">
          <h2 className="right">עלינו</h2>
        </div>
        <img src={rightImg} style={{paddingLeft:"auto"}} alt="shiltei" width={windowSize.innerWidth>850?"50%":"100%"}></img> 
        <img src={leftImg} style={{paddingLeft:"auto"}} alt="shiltei" width={windowSize.innerWidth>850?"50%":"100%"}></img>
      </div>
    </div>
    <div className="rela-block page-section grey product-section">
      <div className="rela-block gutter-container">
        <div className="rela-block section-nav">
          <h2 className="right">מספרים עלינו</h2>
        </div>
        <LoadingBall />
      </div>
    </div>

    <div className="rela-block page-section new-section">
      <div className="rela-block gutter-container">
        <div className="rela-block section-nav">
          <h2 className="right">צור קשר</h2>
        </div>
        <ContactUs />
        {/* <div className='right'> */}
        <div class="right-column">
          
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
        <h2>?יש לך שאלה</h2>
        {/* </div> */}
        </div>
    <iframe  src="https://embed.waze.com/iframe?zoom=16&lat=32.607117&lon=35.293713&ct=livemap&pin=1" 
				width={"100%"} height="320"></iframe>
        
        {/* <LoadingBall /> */}
      </div>
    </div>

    <div className="rela-block footer">
    
      <div className="rela-block gutter-container inner-footer-container">
      <NavLink className="logo" style={{padding:"10px"}} to="/managerLogin">MANAGEMENT</NavLink>
      </div>
    </div>
  </div> 
  <div className={`product-view-container ${productViewOpen ? 'active' : ''}`}>
    <FullViewComp setProductViewOpen={setProductViewOpen} viewedProduct={viewedProduct} setCart={setCart}/>
      </div>
    </div>
}

export default App2;
