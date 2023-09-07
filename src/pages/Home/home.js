import { useState,useEffect } from 'react';
import Card from '../../Card/card';
import Axios from 'axios';
import { getServerId } from '../../localStorage';

export function Home({items,setItems}) {
  const [products,setProducts] = useState([]);
  useEffect(() => {
    Axios.post(getServerId()+"/get-products", {
    }).then((res) => {
        setProducts(res.data);
    })

    },[]);

    // const sendMail=()=>{
    //   Axios.post(getServerId()+"/send-mail", {
    //   }).then((res) => {
    //   })
    // }


    return (
      <div className='Row'>
        {/* <button onClick={sendMail}></button> */}
        {
          products.map((product,i)=>{
            return <div style={{display:"inline-block"}} key={i}> <Card setItems={setItems} key={i} title={product.title} makat={product.makat} price={product.price} picture={product.picture} highlight={product.highlight} id={product._id} /></div>
          })
        }
      </div>
    );
  }