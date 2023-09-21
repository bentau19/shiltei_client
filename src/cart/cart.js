import { useState } from 'react';
import { ItemLine } from '../Modal/CartView/itemLine';
import { removeItem } from '../localStorage';
import './cart.css'
import ItemInfoModal from '../Modal/ItemInfo/ItemInfoModal';

export const Cart =({cartOpen,items,setItems,setCartOpen})=>{


    // const handleOpen = () => setOpen(true);
    // const handleClose = () => {setchanged(false);setOpen(false)};
    const [total, setTotal] = useState(0);
    const [changed, setchanged] = useState(false);
  
//   useEffect(()=>{
//     setTotal(0)
//   },[cartOpen])
  
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
              <ItemInfoModal sum={total} items={items} setItems={setItems} handleParentClose={setCartOpen} setTotal={setTotal} />
            </div>
          </div>
        );
      } else {
        return <div><h1>The cart is empty</h1></div>;
      }
    }



    return <div className="cart" style={cartOpen ?{right:"0"}:{}}>
    <p className={`rela-block `}style={{textDecoration: "underline"}} >CART</p>
    {Array.isArray(items) &&
            items.map((id, i) => {
              return (
                <ItemLine
                  key={i}
                  id={id}
                  i={i}
                  setTotal={setTotal} // Pass setTotal to ItemLine
                  onRemove={onRemove}
                  idsLen={items.length}
                  changed={changed}
                />
              );
            })
          }
          {buttonChange()}
  </div>
}