import ReactSwitch from 'react-switch';
import Dropdown from "./Dropdown";
import React, { useState } from "react";
import Axios from 'axios';
import './Card2.css';
const initailOptions = ["wood","metal"];

const Card=({titlei,makati,pricei,picturei,tagsi,highlight,last})=>{
   const [options, setOptions] = React.useState(initailOptions);
   
   let cardClass ="card2"
    let buttonValue ="update"
    const [title, setTitle] = useState(titlei);
    const [makat, setMakat] = useState(makati);
    const [price, setPrice] = useState(pricei);
    const [picture, setPicture] = useState(picturei);
    const [tags, setTags] = useState(tagsi);
    const [checked, setChecked] = useState(highlight);
    if(last){
      cardClass = "newcard"
      buttonValue="save"
      console.log("hello")
    }
    let height="500px";
    
    const handleChange = val => {
      highlight=val;
      setChecked(val)
    }

    const handleSend=()=>{
      console.log(title)
      console.log(price)
      console.log(makat)
      if(title!==""&&price!==""&&makat!==""){
        Axios.post("http://localhost:8000/add-product", {
           params: {
            title:title,
            makat:makat,
            price:price,
            picture:picture,
            highlight:checked,
            tags:tags,
            } }).then(
          (res) => {
            console.log(res)
          }
        );
      }
    }

    return(
    <div  id="mainDiv" className= {cardClass} style={{height:height}}>
    <div className='cont'>
    title: 
    <input required onChange={(val)=>{setTitle(val.target.value)}} defaultValue={title}/>
    </div>
    <div className='cont'>
    picture (link):
    <input onChange={(val)=>setPicture(val.target.value)} defaultValue={picture}/>
    </div>
    <div className='cont'>
    price:
    <input required onChange={(val)=>setPrice(val.target.value)}  type='number' defaultValue={price}/>
    </div>
    <div className='cont'>
    makat:
    <input required onChange={(val)=>setMakat(val.target.value)} defaultValue={makat}/>
    </div>
    <div className='cont'>
    highlight:
    <ReactSwitch
        checked={highlight}
        onChange={handleChange}
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
      />
      <button onClick={handleSend} style={{height:"30px",width:"70px",marginTop:"10px"}}>{buttonValue}</button>
    </div>);
}
export default Card;