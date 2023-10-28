
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "./highlighted.css";

// import required modules
import { Pagination, Navigation,Autoplay } from "swiper/modules";
import { useEffect, useState } from 'react';

const colors = ["#fbadaf","#a4e0eb","#edb9d6","#fdca95","#cbb5e2"]

export const CardView =({product,viewProduct})=>{
    return <div style={{width:"100%"}}>
        <div className="book-img" onClick={()=>viewProduct(product)} style={{display:"inline"}}>
            <img

            src={product.picture}
            alt=""
            className="book-photo"
            style={{ aspectRatio: "160/240", overflow: "visible",zIndex:"1000",marginLeft:"25px",marginTop:"25px", width:"172px" }}
          />
    </div>
    <div dir="rtl">
    <div className="book-content" style={{display:"inline"}}>
 <div className="book-title">{product.title}</div>
 <div className="book-author">{product.makat}</div>
 <div className="book-sum">
  {product.price}₪
  <br/> 
  {product.size}
  {" "}
 </div>
 <div onClick={()=>viewProduct(product)} className="book-see">
  Preview</div>
</div>
</div>
</div>
}

export const HighlightView=({highlights,viewProduct})=>{
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  const [, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {

      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);




    
    return (
        <>
        <div className="book-slide" style={{ height:"320px" , maxWidth:"67%",}}>
          
          <Swiper 
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter:true,
        }}

            slidesPerView={Math.floor(window.innerWidth / 400)>3?3:Math.floor(window.innerWidth / 400)}
            spaceBetween={1}
            pagination={{
              clickable: true
            }}
            speed={500}
            navigation={true}
            loop={true}
            modules={[Pagination, Navigation,Autoplay]}
            className="mySwiper"
          >
            {

            highlights.map((product,i)=>{
              return <SwiperSlide key={i} className='mainCard' style={{backgroundColor:colors[i%6]}} >
                <CardView product={product} viewProduct={viewProduct} />
              </SwiperSlide>
            })
            }
          </Swiper>
          </div>
        </>
      );
}