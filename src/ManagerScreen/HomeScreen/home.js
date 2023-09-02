import { useState,useEffect } from 'react';
import Axios from 'axios';
import Card from '../Card/card2';
import { useLocation } from 'react-router-dom';

export function ManagerHome() {
  const {state} = useLocation();
  const { managerPass } = state;
  const [products,setProducts] = useState([]);
  useEffect(() => {
    getData();
    },[]);

    const getData=()=>{
      Axios.post("http://localhost:8000/get-products", {
      }).then((res) => {
          setProducts(res.data);
      })
    }


    return (
      <div className='Row'>
        {
          products.map((product,i)=>{
            return <div style={{display:"inline-block"}} key={i}> 
            <Card key={i} item = {product} last = {false} />
            </div>
          })
        }
        <Card item={Product(title="",makat="", price="",picture="",tags=[],highlight=false)} last = {true} />
      </div>
    );
  }