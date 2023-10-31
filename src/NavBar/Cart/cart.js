import { useEffect, useState } from 'react';
import { editItem, idToItem, removeItem, updateItem } from '../../localStorage';
import './cart.css'
import { Icon } from '@iconify/react';
import CartButton from '../../CartButton/cartButton';

export const ProductLine=({id, i, setTotal, onRemove})=>{
  const [product, setProduct] = useState(null);
  const [load, setLoad] = useState(false);
  useEffect(() => { 
    setLoad(true)
    const fetchProduct =  async() => {
      try {
        const res = await idToItem(id);
        if (res) {
          setProduct(res);
          if(product==null){
            setTotal((prevTotal) => prevTotal + res.price); 
          } 
          setLoad(false)
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error("error");
      }
    };
    fetchProduct();
  }, [id]);

  const onChangeContent=({value})=>{
    id.content=value;
    updateItem({id:{id},place:i});
  }
  const onChangeComment=({value})=>{
    id.comment=value;
    updateItem({id:{id},place:i});
  }

  return <>
  {product&&<div key={id} className='product-line'>
            {!load?<div><div className='product-img'
              style={{
                width:"100px",
                height:"120px",
                background: `url('`+product.picture+`') center center no-repeat`,
                backgroundSize:"cover",
              }}
            >
              <div className='delete-item-button' onClick={()=>{onRemove(product.price,i)}}>
              <Icon icon="material-symbols:delete-outline" className='delete-icon' width="30" hFlip={true} />
              </div>
            </div>
            <h3 dir="rtl" className='product-title'>{product.title}</h3>
            <textarea dir="rtl" className='product-comment' onChange={(val)=>{onChangeContent({value:val.target.value})}} defaultValue={id.content}/>
            <Icon icon="mdi:sign"  width="25" hFlip={true} />
            <textarea dir="rtl" className='product-comment' onChange={(val)=>{onChangeComment({value:val.target.value})}} defaultValue={id.comment}/>
            <Icon icon="material-symbols:comment-outline"  width="25" hFlip={true} />
            <p dir="rtl" className='product-price'>מחיר: {product.price}₪</p></div>:<div dir="ltr" style={{textAlign:"left"}}><h1>LOADING...</h1></div>}
          </div>}
  </>
}



export const Cart =({cartOpen,items,setItems,setCartOpen})=>{

const [total, setTotal] = useState(0);

function onRemove(price,i) {
      setTotal((prevTotal) => prevTotal - price); // Update total in CartModal
      removeItem({
        index: i,
        setItems: setItems,
      });
    }
  
    function buttonChange() {
      if (total !== 0) {
        return (
          <div className='bottom-bar'>
          <p>{total}₪ :סהכ לתשלום</p>
          <div disabled className='buttonC'>
            <CartButton sum={total} items={items} setItems={setItems} handleParentClose={()=>{setCartOpen(false)}} setTotal={setTotal} />
          </div>
        </div>
        );
      } else {
        return <div style={{textAlign:"center"}}><h1>The cart is empty</h1></div>;
      }
    }

    return<div className="cart-page" style={cartOpen ? {right:"0px"} : {right:"-400px " }}>
    {(
      <>
        <div className='cart-props-container'>
          <div style={{textAlign:"center"}}>
          <Icon className='cart-icon' icon="mdi:cart" width="35" hFlip={true} />
          <h2 style={{ display: "inline-block" }}>עגלת קניות</h2>
          <Icon className='exit-button'  width="32" onClick={() => setCartOpen(false)} icon="carbon:close-outline" /> 
          </div>
          {Array.isArray(items)&&items.length!==0&&<div className='product-lines-container' >
          {Array.isArray(items) &&
            items.map((id, i) => {
              return (
                <ProductLine
                  key={i}
                  i={i}
                  id={id}
                  setTotal={setTotal} // Pass setTotal to ItemLine
                  onRemove={onRemove}
                  idsLen={items.length}
                />
              );
            })
          }
          </div>}
          {buttonChange()}
        </div>
      </>
    )}
  </div>
}

