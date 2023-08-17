import { useState,useEffect } from 'react';
import Card from '../../Card/card';
import Axios from 'axios';

export function Home({items,setItems}) {
  const [products,setProducts] = useState([]);
  useEffect(() => {
    Axios.post("http://localhost:8000/get-products", {
    }).then((res) => {
        setProducts(res.data);
    })

    },[]);


    return (
      <div className='Row'>
        {
          products.map((product,i)=>{
            return <div style={{display:"inline-block"}} key={i}> <Card items={items} setItems={setItems} key={i} title={product.title} makat={product.makat} price={product.price} picture={product.picture} highlight={product.highlight} /></div>
          })
        }
      </div>
    );
  }