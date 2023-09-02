import ReactSwitch from 'react-switch';
import Dropdown from "./Dropdown";
import React, { useState } from "react";
import Axios from 'axios';
import './Card2.css';
import { useRef } from 'react';
const initailOptions = ["wood","metal"];

const Card=({update,titlei,makati,pricei,picturei,tagsi,highlight,last,pass})=>{
   const [options, setOptions] = React.useState(initailOptions);  
   let cardClass ="card2"
    let buttonValue ="update"
    const [password] = useState(pass);
    const titleRef=useRef(null);
    const makatRef=useRef(null);
    const priceRef=useRef(null);
    const pictureRef=useRef(null);
    const [islast]=useState(last)
    const [title] = useState(titlei);
    const [makat] = useState(makati);
    const [price] = useState(pricei);
    const [picture] = useState(picturei);
    const [tags, setTags] = useState(tagsi);
    const [checked, setChecked] = useState(highlight);
    console.log(tags)
    if(last){
      cardClass = "newcard"
      buttonValue="save"
    }
    let height="500px";
  

    const handleSend=()=>{
      if(titleRef.current.value!==""&&priceRef.current.value!==""&&makatRef.current.value!==""){
        if(!islast){
          deleteItem();
        }
        Axios.post("http://localhost:8000/add-product", {
           params: {
            title:titleRef.current.value,
            makat:makatRef.current.value,
            price:priceRef.current.value,
            picture:pictureRef.current.value,
            highlight:checked,
            tags:tags,
            pass:password,
            } }).then(
          (res) => {
            console.log(res)
            update()
          }
        );
        
      }
      
    }

    const deleteItem=()=>{
      Axios.post("http://localhost:8000/delete-product", {
        params: {
         title:titleRef.current.value,
         } }).then(
       (res) => {
         console.log(res)
         update()
       }
       
     );
   }

   const reset=()=>{
    titleRef.current.value=""
    makatRef.current.value=""
    pictureRef.current.value=""
    priceRef.current.value=""
    setChecked(false)
    setTags([])
   }
    

    return(
    <div  id="mainDiv" className= {cardClass} style={{height:height}}>
    {last?<button onClick={reset}>RESET</button>:<button onClick={deleteItem}>X</button>}
    <div className='cont'>
    title: 
    <input ref={titleRef} defaultValue={title}/>
    </div>
    <div className='cont'>
    picture (link):
    <input ref={pictureRef} defaultValue={picture}/>
    </div>
    <div className='cont'>
    price:
    <input ref={priceRef}  type='number' defaultValue={price}/>
    </div>
    <div className='cont'>
    makat:
    <input ref={makatRef}  defaultValue={makat}/>
    </div>
    <div className='cont'>
    highlight:
    <ReactSwitch
        checked={checked}
        onChange={(val)=>setChecked(val)}
      />
    </div>
    tags:
    <Dropdown
        isSearchable
        isMulti
        placeHolder="Select..."
        options={options}
        onChange={(value) => setTags(value)}
        setOptions= {setOptions}
        tags = {tags}
      />

      <button onClick={handleSend} style={{height:"30px",width:"70px",marginTop:"10px"}}>{buttonValue}</button>
    </div>);
}
export default Card;