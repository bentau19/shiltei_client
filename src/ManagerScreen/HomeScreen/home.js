import { useState,useEffect } from 'react';
import Axios from 'axios';
import Card from '../Card/card2';
import { useLocation } from 'react-router-dom';
import {Product} from '../../productClass'
import { useAlert } from "react-alert";

export function ManagerHome() {
  const alert = useAlert();
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


    const handleSend=(product,islast)=>{
      if(product.title!==""&&product.price!==""&&product.makat!==""){
        if(!islast){
          deleteItem();
        }
        Axios.post("http://localhost:8000/add-product", {
           params: {
            title:product.title,
            makat:product.makat,
            price:product.price,
            picture:product.picture,
            highlight:product.highlight,
            tags:product.tags,
            pass:managerPass,
            } }).then(

          (res) => {
            if (res.status===200){
              console.log("Add Succefull!!")
              alert.success("It's ok now!");
              setProducts(products => [...products, product])
            }else{
            console.log("Try Again Later!")
          }
          //update
          }
        );
      }
    }


    const deleteItem=(_id)=>{
      Axios.post("http://localhost:8000/delete-product", {
        params: {

         _id:_id  ,
         pass:managerPass
         } }).then(
       (res) => {
         console.log(res)
         getData()
         //update() 
       }
       
     );
   }
    return (
      <div className='Row'>
        {
          products.map((product,i)=>{
            return <div style={{display:"inline-block"}} key={i}> 
            <Card handleSend = {handleSend} deleteItem = {deleteItem} key={i} product = {product} last = {false} />
            </div>
          })
        }
         <Card handleSend = {handleSend} deleteItem = {deleteItem}  product={new Product("","","","",[],false,0)} last = {true} /> 
      </div>
    );
  }