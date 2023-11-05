
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../Highlight/highlighted.css";
import "./tellAboutUs.css"
import { Pagination, Navigation,Autoplay } from "swiper/modules";
import {  useRef, useState } from 'react';
import { Stars } from "./rateModal";
import Axios from 'axios';
import { getServerId } from "../../localStorage";
const AdviceImg=()=>{
  return <div className="advice-img">
    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="ing"/>
      </div>
      }
const AdviceName = ({name})=>{
  return <div className="advice-name">
    <h1>{name}</h1>
  </div>
}

const AdviceContent = ({content})=>{
  return <div className="advice-content">
          {content}
  </div>
  
}

const AdviceRating = ({rating})=>{
  const array = [1,2,3,4,5];
  
  return <div className="advice-rating">
  <div className="rating__stars">
    {array.map((num) => (
      <>
    <label className="rating__label" >
      <svg
        className="rating__star"
        width={32}
        height={32}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <ellipse
          className={num<=rating?"rating__star-shadow_checked":"rating__star-body"}
          cx={16}
          cy={31}
          rx={16}
          ry={1}
        />
        <g className="rating__star-body-g">
          <path
            className={num<=rating?"rating__star-body_checked":"rating__star-body"}
            d="M15.5,26.8l-8.2,4.3c-0.8,0.4-1.7-0.3-1.6-1.1l1.6-9.2c0.1-0.3-0.1-0.7-0.3-1l-6.7-6.5c-0.6-0.6-0.3-1.7,0.6-1.8l9.2-1.3c0.4-0.1,0.7-0.3,0.8-0.6L15,1.3c0.4-0.8,1.5-0.8,1.9,0l4.1,8.3c0.2,0.3,0.5,0.5,0.8,0.6l9.2,1.3c0.9,0.1,1.2,1.2,0.6,1.8L25,19.9c-0.3,0.2-0.4,0.6-0.3,1l1.6,9.2c0.2,0.9-0.8,1.5-1.6,1.1l-8.2-4.3C16.2,26.7,15.8,26.7,15.5,26.8z"
          />
        </g>
      </svg>
    </label>
      </>
  ))}
  </div>
  </div>
}


export const CardView =({review})=>{
    
    return <>
    <AdviceImg/> 
      <div className="advice-mainCard"> 
        <AdviceName name={review.name}/>
        <AdviceContent content={review.content}/>
        <AdviceRating rating={review.rate}/>
</div>
</>
}

export const TellAboutUS=({reviews})=>{
  const [Rate,setRate]=useState(0);
  const [isOpen,setIsOpen]=useState(false);
  const nameRef = useRef();
  const contentRef = useRef();
  const handleSend=async()=>{
    if(nameRef.current.value!==""&&contentRef.current.value!==""&&Rate!==0){
      console.log("name - "+nameRef.current.value)
      console.log("content - "+ contentRef.current.value)
      console.log("rate - "+Rate)
      setIsOpen(!isOpen)
      const response = await Axios.post(getServerId() + "/send-review",{ name:nameRef.current.value, content:contentRef.current.value,rate:Rate});
      console.log(response.data);
    }else{
      console.log("error");
    }

  }

    return (
        <>
        <div > 
          <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter:true,
        }}

            slidesPerView={'auto'}
            spaceBetween={5}
            pagination={{
              clickable: true
            }}
            
        centeredSlides={true}
            speed={500}
            navigation={true}
            loop={true}
            modules={[Pagination, Navigation,Autoplay]}
            className="mySwiper advice-swiper"
          >
            {

            reviews.map((review,i)=>{
              return <SwiperSlide key={i} className="swiper-slide1" >
                <CardView key={i} review={review}  />
              </SwiperSlide>
            })
            }
          </Swiper>
          <div className="advice-rating" style={{margin:"10px"}}>
          <button  onClick={()=>setIsOpen(!isOpen)} class="button-58" role="button" >{isOpen?<div>סגור</div>:<div>הוסף ביקורת</div>}</button>     
          </div>
          {isOpen&&<div dir="rtl" className="add-advice-main" >
          <input ref={nameRef} type="text" style={{width:"50%"}} className="form__input1" placeholder="שם מלא"/>
          <textarea ref={contentRef} type="text" style={{width:"80%", marginTop:"20px", height:"200px"}} className="form__input1" placeholder="תוכן"/>   
          <Stars setRate={setRate}/>
          <button onClick={()=>{handleSend()}} style={{margin:"20px"}} class="button-58" role="button">הוסף ביקורת</button>     
          </div>}
          </div>
        </>
      );
}