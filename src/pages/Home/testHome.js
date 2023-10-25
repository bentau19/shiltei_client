import React, { useState, useEffect  } from 'react';
import './testHome.css';
import LoadingBall from '../../loadingBall/loadingBall';
import {HighlightView} from './higlighted'
import { ProductComp } from './HomeComp/ProductComp';
import { FullViewComp, ProductView } from './HomeComp/fullViewComp';
import { NavLink } from 'react-router-dom';
import rightImg from './aboutUsRight.png';
import leftImg from './aboutUsLeft.png';
import { Icon } from '@iconify/react';
import ContactUs from './contectUs/contact';
import { getProducts } from '../../serverReq';

const App2=({menuOpen,items,highlights,setCart,ctags})=> {
    const [productViewOpen, setProductViewOpen] = useState(false);
    // const [currentViewedProduct, setCurrentViewedProduct] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const [search, setSearch] = useState("");
    const [viewedProduct, setViewedProduct] = useState({});
    // const [newItems, setNewItems] = useState([]);
    // const [newItemPos, setNewItemPos] = useState(0);
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
    // setDisplayedProducts([...items])
      init();
    }, []);


    useEffect(() => {
      // updateDisplayedProducts();
    }, [filteredProducts]); 
  
    const init = () => {
      setDisplayedProducts([...items]);
      // updateNewItems();
      // updateFilteredProducts();
      // addDisplayedProducts();
    };


    const endCheck=(temp)=>{
      if(temp.length%12==0 &&temp.length!==0){
        setIsEnd(false)
      }else{
        setIsEnd(true)
      }
    }


    const addDisplayedProducts = async({title="",tag="",reset=false}) => {
      if (reset){
        let temp = await getProducts({skip:0,title:title,tags:tag})
        endCheck(temp)
        setDisplayedProducts([...temp])
      }else{
      let temp = await getProducts({skip:displayedProducts.length,title:title,tags:tag})
      endCheck(temp)
      setDisplayedProducts((pro)=>[ ...pro,...temp])
      }
    }
 
  
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
          <h2 className="right">מוצרים<span>{currenttags !== 'All' ? `/${currenttags}` : ''}</span></h2>
          <div style={{zIndex:4}} className="left category-select">
            {tags.map((c) => (
              <div key={c} className={`rela-inline category ${currenttags === c ? 'active' : ''}`} onClick={() => { setCurrenttags(c); 
                addDisplayedProducts({tag:c,reset:true})
              }}>{c}</div>
            ))}
          </div>
          <div style={{left:"150px"}} className="center search-bar1">
          <input type="text" dir="rtl" placeholder="חפש שלט" onChange={(data)=>{setSearch(data);addDisplayedProducts({title:data.target.value,tag:currenttags,reset:true});}}/>
        </div>
        </div>
        <div className="rela-block product-item-container">
          {displayedProducts.map((item, index) => (
            <ProductComp key={index} info={item} view={viewProduct}  />
          ))}
        </div>
        {!isEnd && (
          <div className="rela-block load-button"
          style={{top:"20px"}}>
            <div className="rela-inline load-button-container" 
             onClick={()=>{addDisplayedProducts({tag:currenttags})}}
            >
              <p>טען עוד</p>
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
        <img src={leftImg} style={{paddingLeft:"auto"}} alt="shiltei" width={windowSize.innerWidth>850?"50%":"100%"}></img> 
        <img src={rightImg} style={{paddingLeft:"auto"}} alt="shiltei" width={windowSize.innerWidth>850?"50%":"100%"}></img>
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
    {/* <ProductView/> */}
     <FullViewComp setProductViewOpen={setProductViewOpen} setViewedProduct={setViewedProduct} viewedProduct={viewedProduct} setCart={setCart}/> 
      </div>
    </div>
}

export default App2;
