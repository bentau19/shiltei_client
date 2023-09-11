// CartModal.js

import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import basket from './basket.png';
import './cartInfo.css';
import ItemInfoModal from '../ItemInfo/ItemInfoModal';
import { clearAll, removeItem } from '../../localStorage';
import { ItemLine } from './itemLine';

function CartModal({ ids, setItems }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setchanged(false);setOpen(false)};
  const [total, setTotal] = useState(0);
  const [changed, setchanged] = useState(false);

useEffect(()=>{
  setTotal(0)
},[open])

  function onRemove(price,i) {
    setchanged(true)
    setTotal((prevTotal) => prevTotal - price); // Update total in CartModal
    removeItem({
      index: i,
      setItems: setItems,
    });
  }

  function buttonChange() {
    if (total !== 0) {
      return (
        <div>
          total price - {total} ש"ח
          <div disabled className='buttonC'>
            <ItemInfoModal sum={total} items={ids} setItems={setItems} handleParentClose={handleClose} />
          </div>
        </div>
      );
    } else {
      return <div><h1>The cart is empty</h1></div>;
    }
  }

  // No need for the addTot and deleteTot functions here

  return (
    <div>
      <img src={basket} alt="basket" width={"50"} onClick={handleOpen}></img>
      <Modal open={open} onClose={handleClose}>
        <div className='main'>
          <h1 onClick={() => clearAll({ setItems })} style={{ textDecoration: "underline" }}>list</h1>
          {Array.isArray(ids) &&
            ids.map((id, i) => {
              return (
                <ItemLine
                  key={i}
                  id={id}
                  i={i}
                  setTotal={setTotal} // Pass setTotal to ItemLine
                  onRemove={onRemove}
                  idsLen={ids.length}
                  changed={changed}
                />
              );
            })
          }
          {buttonChange()}
        </div>
      </Modal>
    </div>
  );
}

export default CartModal;
