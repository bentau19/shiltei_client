import Axios from 'axios';
import { useState } from 'react';
import {React,useEffect} from 'react';
import { useParams } from 'react-router-dom';

function ItemDetail() {
    const {title} = useParams();
    const [product,setProduct] = useState([]);

    useEffect(() => {
        Axios.post("http://localhost:8000/search-product", { params: { title: title } }).then((res)=>{
            // console.log(res.data);
          setProduct(res.data[0]);
      })
      },[title]);


  
    return (
        <div  id="mainDiv" style={{textAlign:"center", height:"400px"}}>
        <h1 style={{color:"yellow"}}>{product?.newPro}</h1>
        <h1 style={{ padding:"10px",textDecoration:"underline"}}>{product?.title}</h1>
        <h2 >{product?.picture}</h2>
        <h2 >{product?.price}$</h2>
        <p>{product?.makat}-מק"ט</p>
        <button >add to cart!</button></div>
    )
}

export default ItemDetail;
