
import React from 'react';
import './Card.css';
import { addItems } from '../localStorage';
function card({title,makat,price,picture,highlight,setItems,id}){
    let newPro="";
    let height="300px";
    if(highlight){
        newPro = "FOR SALE!"
        height="400px"
      }
      function onClickHandle(){
        addItems({
         id : id, 
         setItems:setItems,
      });
      }
    return(
    <div  id="mainDiv" className="card" style={{height:height}}>
     <h1 style={{color:"yellow"}}>{newPro}</h1>
    <h1 style={{color: "white", padding:"10px",textDecoration:"underline"}}>{title}</h1>
    <h2 style={{color:"white"}}>{picture}</h2>
    <h2 style={{color:"white"}}>{price}$</h2>
    <p>{makat}-מק"ט</p>
    <button onClick={onClickHandle}>add to cart!</button>
    </div>);
}
export default card;
