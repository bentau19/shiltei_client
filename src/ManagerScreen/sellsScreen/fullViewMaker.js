import styles from'./oldStyle.module.css'
import '../../ShipingModal/shipingScreen.css'
import { Icon } from '@iconify/react';
import { getServerId } from '../../localStorage';
import Axios from 'axios';
export const FullViewMaker=(items,order,setOrder,pass)=>{
  const stage =["חדש!","נקרא","ייצור","אריזה","משלוח","הגיע"]
  console.log(items)  
  const addStage=()=>{
      console.log("addStage!")
      if(order.stage<6){
      Axios.post(getServerId()+"/update-sells",
      {params:{
        pass:pass,
        stage:order.stage,
        key:"+",
        _id:order._id
         } }).then((res) => {
      if (res.status === 200) {
        setOrder((prevProduct) => ({
          ...prevProduct,
          stage:order.stage+1,
        }));
      } else {
        console.log("Try Again Later!");
      }
    })
    .catch((error) => {

      console.error("Error deleting product:", error);
    });
    if(order.stage>1){
    Axios.post(getServerId() + "/send-update", {  _id:order._id,tradeNum:order.tradeNum
  ,secretKey:"itIsMe!",name:order.name,email:order.email,stage:stage[order.stage]}).then((res)=>{
        if (res.status===200){
        }else{  
      }
      })
    }}

  }
  const decreaseStage = () => {
    if (order.stage > 1) {
      Axios.post(getServerId() + "/update-sells", {
        params: {
          pass: pass,
          stage: order.stage,
          key: "-",
          _id: order._id,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            setOrder((prevOrder) => ({
              ...prevOrder,
              stage: prevOrder.stage - 1,
            }));
          } else {
            console.log("Try Again Later!");
          }
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        });
    }
  };
  
  


    return order!==""?<div className={`${styles.mainContainer}`}>
      <h1 style={{ textDecoration: "underline" }}>Full View</h1>
      <h3 className={`${styles.subtitle}`}>items</h3>
      <div className={`${styles.scrollable}`}>
      <table className={`${styles.fixed_headers}`}>
        <thead style={{ height: "40px" }}>
          <tr style={{ color:"white", height: "40px" }}>
            <th>title</th>
            <th>price</th>
            <th>makat</th>
            <th>size</th>
            <th>content</th>
            <th>comments</th>
          </tr>
        </thead>
        <tbody className='tbodyClass'>
        {items.map((item, i) => (
          <tr key={i}>
          <td>{item.id.title}</td>
          <td>{item.id.price}</td>
          <td>{item.id.makat}</td>
          <td>{item.id.size}</td>
          <td>{item.content}</td>
          <td>{item.comment}</td>
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
      <div style={{display: "inline"}} onClick={decreaseStage} > <Icon icon="mdi:arrow-up-bold" width="40" style={{ verticalAlign: 'middle' }} rotate={3} /></div>
    <span   >{stage[order.stage-1]}</span>
    <div style={{display: "inline"}} onClick={addStage}><Icon icon="mdi:arrow-up-bold" width="40" style={{ verticalAlign: 'middle' }}  rotate={1} /></div></div>
    <h3>{order.stage}/6</h3>

      </div>
    </div>:<div/>
 
  }