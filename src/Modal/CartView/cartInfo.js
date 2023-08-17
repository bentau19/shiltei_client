import * as React from 'react';
import Modal from '@mui/material/Modal';
import basket from './basket.png';
import './cartInfo.css';
import ItemInfoModal from '../ItemInfo/ItemInfoModal';
import { clearAll } from '../../localStorage';

function CartModal({items,setItems}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let total = 0;
    
    return<div>
    <img src={basket}  alt="basket" width={"50"} onClick={handleOpen} ></img>
    <Modal 
      open={open}
      onClose={handleClose}
    >
     <div className='main'>
      <h1 onClick={()=>clearAll({setItems})} style={{textDecoration:"underline"}}>list</h1>
      {items.map((product,i)=>{
        total += product.price;
       return <div key={i}>
         <h2>{i+1}. product name: {product.title} <br/>
         makat: {product.makat} <br/>
         price: {product.price}</h2>
         <h1>{items.length===(i+1)?"-----":"+"}</h1>
         
         </div>
        })
      }
      total price - {total} ש"ח 
      <div className='buttonC'><ItemInfoModal sum={total} items={items} setItems={setItems} handleParentClose={handleClose} /></div>


      </div> 

    </Modal>
    </div>
}

export default CartModal;