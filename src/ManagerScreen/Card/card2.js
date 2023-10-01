import ReactSwitch from 'react-switch';
import Dropdown from "./Dropdown";
import React, {  useState } from "react";
import './Card2.css';
import { useRef } from 'react';
import {Product} from '../../productClass'

const Card=({updateTags,product,last,deleteItem,handleSend,setGlobaltags,globaltags,key})=>{
   let cardClass ="card2"
    let buttonValue ="update"
    const titleRef=useRef(null);
    const makatRef=useRef(null);
    const sizeRef=useRef(null);
    const priceRef=useRef(null);
    const pictureRef=useRef(null);
    const [id]=useState(product._id)
    const [title] = useState(product.title);
    const [makat] = useState(product.makat);
    const [size] = useState(product.size);
    const [price] = useState(product.price);
    const [picture] = useState(product.picture);
    const [tags, setTags] = useState(product.tags);
    const [checked, setChecked] = useState(product.highlight);
    if(last){
      cardClass = "newcard"
      buttonValue="save"
    }
    let height="570px";
  

    
    
    const createProduct=()=>{
      
      const newPro = new Product(
        titleRef.current.value,
        makatRef.current.value,
        sizeRef.current.value,
        pictureRef.current.value,
        priceRef.current.value,
        tags,
        checked,
        id
      );  
        //console.log(newPro.highlight)
       return newPro
    }

   const reset=()=>{
    titleRef.current.value=""
    makatRef.current.value=""
    pictureRef.current.value=""
    priceRef.current.value=""
    sizeRef.current.value="/"
    setChecked(false)
    setTags([])
   }

   const haundleSave=()=>{
    const newPro = createProduct();
    handleSend(newPro)
   }


    

    return(
    <div key={key}  id="mainDiv" className= {cardClass} style={{height:height}}>
    {last?<button onClick={reset}>RESET</button>:<button onClick={()=>deleteItem(product._id)}>X</button>}
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
    size:
    <input ref={sizeRef}  defaultValue={size}/>
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
        options={globaltags}
        onChange={(value) => setTags(value)}
        setOptions= {setGlobaltags}
        tags = {tags}
        updateTags={updateTags}
      />

      <button onClick={haundleSave} style={{height:"30px",width:"70px",marginTop:"10px"}}>{buttonValue}</button>
    </div>);
}
export default Card;