// ItemLine.js

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
      <div style={{ width: '90%' }}>
        {product ? (
          <>
            <h2>
              {i + 1}. product name: {product.title} <br />
              makat: {product.makat} <br />
              price: {product.price}
            </h2>
            <h1>{idsLen === i + 1 ? '-----' : '+'}</h1>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div style={{ width: '20%' }}>
        <button onClick={() => {onRemove(product.price,i)}} style={{ color: '#8B0000' }}>
          X
        </button>
      </div>
    </div>
  );
};
