import'./itemLine.css' 

import React, { useEffect, useState } from 'react';
import { idToItem } from '../../localStorage';

export const ItemLine = ({ id, i, setTotal, onRemove, idsLen, changed }) => {
  const [product, setProduct] = useState(null);


  useEffect(() => {
    const fetchProduct =  async() => {
      try {
        const res = await idToItem(id);
        if (res) {
          setProduct(res);
          if(!changed){
          setTotal((prevTotal) => prevTotal + res.price); }// Update total in CartModal
        } else {
          console.error('Product not found');
          // You can handle this case appropriately, such as showing an error message.
        }
      } catch (error) {
        console.error("error");
      }
    };
    fetchProduct();
    
  }, [id,changed,setTotal]);


  
  return (
    <div key={i} style={{ width: '100%', display: 'flex' }}>
      {/* <div style={{ width: '90%' }}>
        {product ? (
          <div className='card'>

          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div style={{ width: '20%' }}>
        <button onClick={() => {onRemove(product.price,i)}} style={{ color: '#8B0000' }}>
          X
        </button>
      </div> */}
    </div>
  );
};
