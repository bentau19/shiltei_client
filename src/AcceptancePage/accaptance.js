
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
      toggleNavigationBar("acceptence");
        Axios.post(getServerId()+"/sell-search", { params: { _id: id,tradeNum:parseInt(tradeNumber) } }).then((res)=>{
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
        order!==""?<div dir="rtl" className={`${styles.mainContainer}`}
        style={{marginLeft:"auto",marginRight:"auto"}}>
        <h1 style={{ textDecoration: "underline" }}>קבלה</h1>
        <h3 className={`${styles.subtitle}`} style={{margin:"5px"}}>מוצרים</h3>
        <div className={`${styles.scrollable}`}>
        <table className={`${styles.fixed_headers}`}>
        <thead style={{ height: "40px" }}>
          <tr style={{ color:"white", height: "40px" }}>
            <th>מוצר</th>
            <th>מחיר</th>
            <th>מק"ט</th>
            <th>מידה</th>
            <th>תוכן</th>
            <th>הערות</th>
          </tr>
        </thead>
        <tbody className='tbodyClass'>
        {items.map((item, i) => (
          <tr key={i}>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td>{item.makat}</td>
          <td>{item.size}</td>
          <td>{order.items[i].content}</td>
          <td>{order.items[i].comment}</td>
        </tr>
            ))}
        </tbody>
      </table>
       
        </div>
        <p style={{margin:"10px", fontSize:"24px"}}>מחיר סופי:{order.totalPrice}</p>
  
        <h3 style={{margin:"15px"}} className={`${styles.subtitle}`}>משלוח</h3>
              {order.ship?<h3><mark>בית</mark>: {order.ship.house} , <mark>רחוב</mark>:{order.ship.street} , <mark>עיר</mark>:{order.ship.city}</h3>:<h3>לקיחה מהחנות</h3>}
              <h3><mark>שם מלא</mark>: {order.name}, <mark>אימייל</mark>:{order.email}</h3>
              <h3><mark>מספר עסקה</mark>: {order.tradeNum}</h3>
        <h3 className={`${styles.subtitle}`}>מצב הזמנה</h3>
        <div className='cont2'>
        <div style={{ verticalAlign: 'middle', marginTop:"0",margin:"10px"}}>
      <span   >{stage[order.stage-1]}</span>
    </div>
      <h3>{order.stage}/6</h3>
        </div>
      </div>:<div/>
    )
}

export default Accaptance;
