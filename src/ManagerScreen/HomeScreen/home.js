import { useState,useEffect } from 'react';
import Axios from 'axios';
import Card from '../Card/card2';

export function ManagerHome({managerPass}) {
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
            return <div style={{display:"inline-block"}} key={i}> 
            <Card key={i} title={product.title} makat={product.makat} price={product.price} tags= {[]} picture={product.picture} highlight={product.highlight} last = {false} />
            </div>
          })
        }
        <Card title="" makat="" price= "" picture= "" tags= {[]} highlight={false} last = {true} />
      </div>
    );
  }