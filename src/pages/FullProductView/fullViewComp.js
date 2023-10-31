import { useEffect, useRef, useState } from 'react';
import { addItems } from '../../localStorage';
import '../Home/testHome.css'
import './fullView.css'
import { ProductComp } from '../Home/ProductComp';
import { getProducts } from '../../serverReq';

export const FullViewComp = ({setProductViewOpen,viewedProduct,setCart,setViewedProduct}) => {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const ref = useRef(null);
  const signContentRef = useRef(null);
  const signCommentsRef = useRef(null);
  const init=async()=>{
    if(viewedProduct.title!=undefined){
      let temp = await getProducts({skip:0,limit:4,title:"",tags:viewedProduct.tags[0]})
      setDisplayedProducts([...temp])
    }
  }

  useEffect(()=>{
    init();
  },[viewedProduct])

  return (
<>
<div className="rela-block section-nav" ref={ref}>
      <h2 className="left" style={{left:"15px"}}>Product View</h2>
      <div className="rela-inline right close-button" onClick={() => setProductViewOpen(false)}>
        <svg viewBox="0 0 30 30" className="button-svg">
          <path d="M 8 8 L 22 22" />
          <path d="M 22 8 L 8 22" />
        </svg>
      </div>
    </div>
  <main className="onb-main">
    <article className="onb-product-view">
      <section className="onb-product-view--image-slider onb-image-slider">
        <img
          alt="sign"
          style={{ aspectRatio: "200/240"}}
          className="onb-image-slider--image"
          src={viewedProduct.picture}
        />
      </section>
      <aside className="onb-aside-wrapper">
        <section dir="rtl" className="onb-product-view--details-box onb-product-details-box">
          <h2 className="onb-product-details-box--title">
            {viewedProduct.title}
          </h2>
          <div className="onb-product-details-box--info-wrapper">
            <span className="onb-product-details-box--price">
              <strong>{viewedProduct.price}₪</strong>
            </span>
            <span className="onb-product-details-box--stock">
              זמין במלאי
            </span>
          </div>
          <div  className="onb-product-details-box--color-picker onb-color-picker">
          <div className="form">
            <input ref={signContentRef} type="text" className="form__input" placeholder="תוכן השלט..."/>
            <textarea ref={signCommentsRef} type="text" style={{marginTop:"20px", height:"200px"}} className="form__input" placeholder="הערות"/>
            </div>
          </div>
          <div className="onb-product-details-box--interaction">
            <a
              className="onb-product-details-box--size-link onb-button onb-button__ghost"
            >
              size: {viewedProduct.size}
            </a>
            <button
              className="onb-product-details-box--add-to-cart-button onb-button onb-button__primary"
              onClick={()=>{addItems({
                id : viewedProduct._id, 
                setItems:setCart,
                content:signContentRef.current.value,
                comments:signCommentsRef.current.value
                
             });setProductViewOpen(false);}}
            >
              add to cart
            </button>
          </div>
          <div className="onb-product-details-box--description">
            <h3 className="onb-product-details-box--description-title">
              description
            </h3>
            <p className="onb-product-details-box--description-text">
              {viewedProduct.description}
            </p>
          </div>
        </section>
        <section className="onb-product-view--social-box onb-social-box">
        <div className="rela-block product-item-container">
          {displayedProducts.map((item, index) => (
            <ProductComp key={index} info={item} view={()=>{setViewedProduct(item);ref.current?.scrollIntoView({ behavior: 'smooth' });}} />
          ))}
        </div>
        </section>
      </aside>
    </article>
  </main>
</>

  );
};