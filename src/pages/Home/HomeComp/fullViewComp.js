import { useEffect, useRef, useState } from 'react';
import { addItems } from '../../../localStorage';
import '../testHome.css'
import './fullView.css'
import { ProductComp } from './ProductComp';
import { getProducts } from '../../../serverReq';
// export const FullViewComp =({setProductViewOpen,viewedProduct,setCart})=>{
//     return <div className="rela-block gutter-container">
//     <div className="rela-block section-nav">
//       <h2 className="left">Product View</h2>
//       <div className="rela-inline right close-button" onClick={() => setProductViewOpen(false)}>
//         <svg viewBox="0 0 30 30" className="button-svg">
//           <path d="M 8 8 L 22 22" />
//           <path d="M 22 8 L 8 22" />
//         </svg>
//       </div>
//     </div>
//     <div className="rela-block pv-container">
//       <div className="rela-block pv-pic" style={{ 'background': `url('${viewedProduct.picture}') center no-repeat` }} />
    
    
//     <div className="rela-block pv-container">
//       <div className="rela-block pv-info">
//         <h2 className="rela-block" style={{textTransform: "uppercase"}}>{viewedProduct.title}</h2>
        
//         <h3 className="rela-block">{viewedProduct.price}₪</h3>
//         <div className="rela-block info-row">
//           <div className="rela-block left">Size:{viewedProduct.size} </div>

//         </div>
//         <div className="rela-block info-row">
//           <div className="rela-inline left">Product Category: </div>
//           <div className="rela-block text">{viewedProduct.tags || 'No Category'}</div>
//         </div>
//         {/* <div className="rela-block info-row">
//           <div className="rela-inline left">Product Description: </div>
//           <div className="rela-block text">{viewedProduct.desc || 'No Description'}</div>
//         </div> */}
//       </div>
//     </div>
//     </div><div className="btn btn__primary" onClick={()=>{addItems({
//          id : viewedProduct._id, 
//          setItems:setCart,
//       });setProductViewOpen(false);}}><p>Add To Basket</p></div>
//     <div className="rela-block pv-container">
//       <h2>Related Items</h2>
//       <div className="rela-block pv-related-container">
//         Other {viewedProduct.tags} products here
//       </div>
//     </div>
//   </div>
// }

export const FullViewComp = ({setProductViewOpen,viewedProduct,setCart,setViewedProduct}) => {
  const [caption, setCaption] = useState('');
  const [remarks, setRemarks] = useState('');
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const ref = useRef(null);

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

        {/* image slider here */}
        <img
          alt="sign"
          style={{ aspectRatio: "200/240"}}
          className="onb-image-slider--image"
          src={viewedProduct.picture}
          // "https://cdn.shopify.com/s/files/1/1750/2933/products/weblrg_e13fb244-3b92-4295-b3f5-60b47c1ae6af_1024x1024.jpg?v=1488570713"
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
            <input type="text" className="form__input" placeholder="תוכן השלט..."/>
            <textarea  type="text" style={{marginTop:"20px", height:"200px"}} className="form__input" placeholder="הערות"/>
            </div>
            {/* <h3 className="onb-color-picker--title">תוכן השלט</h3> */}
            {/* <form className="onb-color-picker--radio-group">
              <div className="onb-color-picker--radio-wrapper">
                <input
                  className="onb-color-picker--radio onb-color-picker--radio__blue"
                  id="onb-color-picker-radio-blue"
                  type="radio"
                  name="color"
                  defaultValue="blue"
                  aria-label="blue color"
                  defaultChecked="checked"
                />
                <label
                  className="onb-color-picker--label"
                  htmlFor="onb-color-picker-radio-blue"
                />
              </div>
              <div className="onb-color-picker--radio-wrapper">
                <input
                  className="onb-color-picker--radio onb-color-picker--radio__green"
                  id="onb-color-picker-radio-green"
                  type="radio"
                  name="color"
                  defaultValue="green"
                  aria-label="green color"
                />
                <label
                  className="onb-color-picker--label"
                  htmlFor="onb-color-picker-radio-green"
                />
              </div>
              <div className="onb-color-picker--radio-wrapper">
                <input
                  className="onb-color-picker--radio onb-color-picker--radio__red"
                  id="onb-color-picker-radio-red"
                  type="radio"
                  name="color"
                  defaultValue="red"
                  aria-label="red color"
                />
                <label
                  className="onb-color-picker--label"
                  htmlFor="onb-color-picker-radio-red"
                />
              </div>
              <div className="onb-color-picker--radio-wrapper">
                <input
                  className="onb-color-picker--radio onb-color-picker--radio__yellow"
                  id="onb-color-picker-radio-yellow"
                  type="radio"
                  name="color"
                  defaultValue="yellow"
                  aria-label="yellow color"
                />
                <label
                  className="onb-color-picker--label"
                  htmlFor="onb-color-picker-radio-yellow"
                />
              </div>
              <div className="onb-color-picker--radio-wrapper">
                <input
                  className="onb-color-picker--radio onb-color-picker--radio__brown"
                  id="onb-color-picker-radio-brown"
                  type="radio"
                  name="color"
                  defaultValue="brown"
                  aria-label="brown color"
                />
                <label
                  className="onb-color-picker--label"
                  htmlFor="onb-color-picker-radio-brown"
                />
              </div>
              <div className="onb-color-picker--radio-wrapper">
                <input
                  className="onb-color-picker--radio onb-color-picker--radio__grey"
                  id="onb-color-picker-radio-grey"
                  type="radio"
                  name="color"
                  defaultValue="grey"
                  aria-label="grey color"
                />
                <label
                  className="onb-color-picker--label"
                  htmlFor="onb-color-picker-radio-grey"
                />
              </div>
            </form> */}
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
          {/* how to seperate components best? */}
        </section>
      </aside>
    </article>
  </main>
</>

  );
};