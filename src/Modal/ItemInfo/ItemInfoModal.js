import * as React from 'react';
import CreditCardView from '../../CreditCard/index';
import Modal from '@mui/material/Modal';
import { clearAll } from '../../localStorage';
import Axios from 'axios';

function ItemInfoModal({sum,items,setItems,handleParentClose}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () =>{
      setOpen(false);
      fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {sendBuy(data.ip)})
      .catch(error => sendBuy("error"))
      clearAll({setItems});
      handleParentClose();};
       
      function sendBuy(ip){
      Axios.post("http://localhost:8000/add-sell",{ params: { items: items ,
      totalPrice:sum,
      ip:ip
        } }).then(
            (res)=>{
              console.log(res.data)
            }
          )
    }
    return<div>
    <button className="button-3" onClick={handleOpen}>BUY</button>
    <Modal 
      open={open}
      onClose={handleClose}
    >
     <div><CreditCardView onCloseFunc={handleClose} /></div> 
    </Modal></div>
}

export default ItemInfoModal;