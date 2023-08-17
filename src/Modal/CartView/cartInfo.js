import * as React from 'react';
import Modal from '@mui/material/Modal';
import basket from './basket.png';
import './cartInfo.css';
import ItemInfoModal from '../ItemInfo/ItemInfoModal';
import { clearAll, removeItem } from '../../localStorage';

function CartModal({items,setItems}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let total = 0;
    function onRemove(_id){

      removeItem({
        items : items,
        deletedItem :_id, 
        setItems:setItems,
    });
    }
    function buttonChange(){
      if(total!==0){
        return <div>
          total price - {total} ש"ח 
      <div disabled className='buttonC'><ItemInfoModal sum={total} items={items} setItems={setItems} handleParentClose={handleClose} /></div>
        </div>
      }
      else{
        return <div><h1>The cart is empty</h1></div>
      }
    }


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
       return <div key={i} style={{width:"100%", display: "flex"}}>
        <div style={{width:"90%"}}>
         <h2>{i+1}. product name: {product.title} <br/>
         makat: {product.makat} <br/>
         price: {product.price}</h2>
         <h1>{items.length===(i+1)?"-----":"+"}</h1>
         </div>
         <div style={{width:"20%"}}><button onClick={()=>onRemove(product)}  style={{color:"	#8B0000"}} >X</button></div>
         </div>
        })
      }
      {
      buttonChange()}
      </div> 

    </Modal>
    </div>
}

export default CartModal;