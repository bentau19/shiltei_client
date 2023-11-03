import * as React from 'react';
import Modal from '@mui/material/Modal';
import { clearAll, getServerId } from '../localStorage';
import Axios from 'axios';
import ShipModel from '../ShipingModal/shipingScreen';

function CartButton({sum,items,setItems,handleParentClose,setTotal}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () =>{
      setOpen(false);
      handleParentClose(false);};
      
      const handleSend = (ship,name,email) =>{
        console.log(name)
        setOpen(false);
        console.log(ship)
        fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {sendBuy(data.ip,ship,name,email)})
        .catch(error => sendBuy("error",ship,name,email))
        clearAll({setItems});
        setTotal(0);
        handleParentClose(false);};

      function sendBuy(ip,ship,name,email){
      Axios.post(getServerId()+"/add-sell",{ params: { items: items ,
      totalPrice:sum,
      ship:ship,
      name:name,
      email:email,
      ip:ip
        } }).then(
            (res)=>{
              console.log(res.data)
              console.log(
                res.data._id)
                console.log(res.data.tradeNum)
                console.log(res.data.name)
                console.log(res.data.email)
              
              try{
                Axios.post(getServerId()+"/send-mail", {params:{
                  secretKey:"itIsMe!",
                  _id:res.data._id,
                  tradeNum:res.data.tradeNum,
                  name:res.data.name,
                  email:res.data.email,} }).then((res) => {
                })
              }catch(e){
                console.log("error!!")
              }
            }
          )
    }
    return<div>
    <button className='send_button' onClick={handleOpen}>מעבר לתשלום</button>
    <Modal 
      open={open}
      onClose={handleClose}
    >
     <div><ShipModel handleSend={handleSend} handleParentClose={setOpen} /></div> 
    </Modal></div>
}

export default CartButton;