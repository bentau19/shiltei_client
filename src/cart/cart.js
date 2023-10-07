import { useState } from 'react';
import { ItemLine } from '../Modal/CartView/itemLine';
import { removeItem } from '../localStorage';
import './cart.css'
import ItemInfoModal from '../Modal/ItemInfo/ItemInfoModal';
import { Icon } from '@iconify/react';
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
      <div style={{width:"100%",height:"50px",backgroundColor:"aliceblue", border:"0.5px solid"}}>
      <Icon style={{position:"absolute", margin:"5px", right:0}} icon="mdi:cart"  width="35" hFlip={true} />
      <h2 style={{display: "inline-block"}}>עגלת קניות</h2>
      <Icon onClick={()=>setCartOpen(false)} style={{display: "inline-block",margin:"5px",position:"absolute", left:"7px"}} width="32" icon="carbon:close-outline" />
        <div>
        <div
  style={{
    left:0, float: "left",
    width: "100px",
    height: "100px",
    background: `url('https://img.freepik.com/free-photo/red-stop-sign-downtown_53876-143018.jpg?w=740&t=st=1696148494~exp=1696149094~hmac=01e0a40897a558154542a149b2db5c72fa5f7dcf22f5b35c3e292700653cdd6e') center center no-repeat`,
    backgroundSize: "cover",
  }}
></div>


<div style={{ clear: "left" }}></div>
       
        <hr></hr>
        </div>
      </div>
      
    {/* <p className={`rela-block `}style={{textDecoration: "underline"}} >CART</p> */}
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
          {/* {buttonChange()} */}
  </div>
}

