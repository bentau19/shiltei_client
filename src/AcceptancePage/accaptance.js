
import {React,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigationContext } from '../NavigationContext';
import Axios from 'axios';
import { getServerId, idToItem } from '../localStorage';
import { useState } from 'react';

import styles from'../ManagerScreen/sellsScreen/oldStyle.module.css'
function Accaptance() {
    const stage =["חדש!","נקרא","ייצור","אריזה","משלוח","הגיע"]
    const {id,tradeNumber} = useParams();
    const { toggleNavigationBar } = useNavigationContext();
    const [order,setOrder]= useState("");
    const [items,setItems]= useState([]);
    useEffect(() => {
      toggleNavigationBar("client");
        Axios.post(getServerId()+"/sell-search", { params: { _id: id,tradeNum:parseInt(tradeNumber) } }).then((res)=>{
            console.log(res.data[0])
            getItems(res.data[0]);
            setOrder(res.data[0])


      })// eslint-disable-next-line
      },[]);

      const getItems = async (order) => {
        try {
          let updatedItems = []; // Create a new array to hold the updated items
      
          for (let i = 0; i < order.items.length; i++) {
            let id = order.items[i];
            let tempItem = await idToItem(id);
            updatedItems.push(tempItem); // Add the new item to the updated array
          }
          setItems(updatedItems); // Update the state with the new array of items
        } catch (e) {
          console.log(e);
        }
      };
  
    return (
        order!==""?<div className={`${styles.mainContainer}`}>
        <h1 style={{ textDecoration: "underline" }}>Acceptance</h1>
        <h3 className={`${styles.subtitle}`}>items</h3>
        <div className={`${styles.scrollable}`}>
        <table className={`${styles.fixed_headers}`}>
          <thead style={{ height: "40px" }}>
            <tr style={{ color:"white", height: "40px" }}>
              <th>title</th>
              <th>price</th>
              <th>makat</th>
              <th>size</th>
            </tr>
          </thead>
          <tbody className='tbodyClass'>
          {items.map((item, i) => (
            <tr key={i}>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.makat}</td>
            <td>{item.size}</td>
          </tr>
              ))}
          </tbody>
        </table>
        
        </div>
        <p style={{textAlign:"left",paddingLeft:"100px", fontSize:"24px"}}>TotalPrice:{order.totalPrice}</p>
  
        <h3 className={`${styles.subtitle}`}>SHIP</h3>
              {order.ship?<h3><mark>HOUSE</mark>: {order.ship.house} , <mark>STREET</mark>:{order.ship.street} , <mark>CITY</mark>:{order.ship.city}</h3>:<h3>Own Take</h3>}
              <h3><mark>NAME</mark>: {order.name}, <mark>EMAIL</mark>:{order.email}</h3>
              <h3><mark>Trade Number</mark>: {order.tradeNum}</h3>
        <h3 className={`${styles.subtitle}`}>STAGE</h3>
        <div className='cont2'>
        <div style={{ verticalAlign: 'middle' }}>
      <span   >{stage[order.stage-1]}</span>
    </div>
      <h3>{order.stage}/6</h3>
  
        </div>
      </div>:<div/>
        // <div  id="mainDiv" style={{textAlign:"center", height:"400px"}}>
        // <h1 style={{color:"yellow"}}>{product?.newPro}</h1>
        // <h1 style={{ padding:"10px",textDecoration:"underline"}}>{product?.title}</h1>
        // <h2 >{product?.picture}</h2>
        // <h2 >{product?.price}$</h2>
        // <p>{product?.makat}-מק"ט</p>
        // <button >add to cart!</button></div>
    )
}

export default Accaptance;
