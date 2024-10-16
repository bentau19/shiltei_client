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
<div dir="rtl">
<div dir="rtl" className="rela-block section-nav">
      <h2 className="right" style={{right:"15px"}}>תצוגת מוצר</h2>
      <div className="rela-inline left close-button" style={{left:"15px"}} onClick={() => setProductViewOpen(false)}>
        <svg viewBox="0 0 30 30" className="button-svg">
          <path d="M 8 8 L 22 22" />
          <path d="M 22 8 L 8 22" />
        </svg>
      </div>
    </div>
  <main  ref={ref} className="onb-main">
    <article className="onb-product-view">
      <section className="onb-product-view--image-slider onb-image-slider">
        <img
          alt="sign"
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
            <span style={{fontSize:"24px"}} className="onb-product-details-box--price">
              <strong>{viewedProduct.price}₪</strong>
            </span>
            <span style={{fontSize:"24px"}}className="onb-product-details-box--stock">
              זמין במלאי
            </span>
          </div>
          {viewedProduct.description&&<div className="onb-product-details-box--description">
            <h3 style={{fontSize:"26px"}} className="onb-product-details-box--description-title">
              אודות:
            </h3>
            <p style={{fontSize:"24px",marginBottom:"20px"}} className="onb-product-details-box--description-text">
              {viewedProduct.description}
            </p>
          </div>}
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
              גודל : {viewedProduct.size}
            </a>
            <button
              className="onb-product-details-box--add-to-cart-button onb-button onb-button__primary"
              style={{fontSize:"15px",cursor:"pointer"}}
              onClick={()=>{addItems({
                id : viewedProduct._id, 
                setItems:setCart,
                content:signContentRef.current.value,
                comments:signCommentsRef.current.value
                
             });setProductViewOpen(false);}}
            >
              הוסף לעגלה
            </button>
          </div>

        </section>
        <section className="pro_section">
        <div className="proComp_contain_div rela-block product-item-container">
          {displayedProducts.map((item, index) => (
            <ProductComp key={index} info={item} view={()=>{setViewedProduct(item);ref.current?.scrollIntoView({ behavior: 'smooth' });}} />
          ))}
        </div>
        </section>
      </aside>
    </article>
  </main>
</div>

  );
};