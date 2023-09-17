import { useState,useEffect } from 'react';
import Axios from 'axios';
import Card from '../Card/card2';
import { useLocation, useNavigate } from 'react-router-dom';
import {Product} from '../../productClass'
import { getServerId } from '../../localStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigationContext } from '../../NavigationContext';
export function ManagerHome() {
  const navigate = useNavigate();
  const success_notify = (message) =>toast.success(message, {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });;
    const error_notify=(message)=>toast.error(message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      const {state} = useLocation();
      const { managerPass } = state;
  const [products,setProducts] = useState([]);
  const { toggleNavigationBar } = useNavigationContext();
  useEffect(() => {
    toggleNavigationBar("manager");
    loginCheck();
    getData();
     // eslint-disable-next-line
    },[]);


    const loginCheck=()=>{
      Axios.post(getServerId()+"/manager-login", { params: { password: managerPass } }).then(
        (res) => {
            if (res.data!=="/managerHome"){
                navigate('/managerLogin');
            }
        }
      );
    }

    const getData=()=>{
      Axios.post(getServerId()+"/get-products", {
      }).then((res) => {
        let d = [...res.data]
        d.reverse()
        setProducts(d);
          
      })
    }
    const deleteItem=(_id)=>{
      Axios.post(getServerId()+"/delete-product",
      {params:{
         _id:_id  ,
         pass:managerPass
         } }).then((res) => {
      if (res.status === 200) {
        success_notify("item deleted Succefull!!");
        // Filter out the deleted product from the 'products' state
        setProducts((products) => products.filter((product) => product._id !== _id));
      } else {
        error_notify("delete doesn't work");
        console.log("Try Again Later!");
      }
    })
    .catch((error) => {
      error_notify("delete dosn't work 2");
      console.error("Error deleting product:", error);
    });
   }
   
   const handleSend=(product)=>{
    if(product.title!==""&&product.price!==""&&product.makat!==""){
      Axios.post(getServerId()+"/add-product", {
         params: {
          title:product.title,
          makat:product.makat,
          size:product.size,
          price:product.price,
          picture:product.picture,
          highlight:product.highlight,
          tags:product.tags,
          pass:managerPass,
          } }).then(
        (res) => {
          if (res.status===200){
            success_notify("Add Succefull!!");
            setProducts(products => [product,...products])
          }else{
            error_notify("internet connection error");
          console.log("Try Again Later!")
        }
        }
      );
    }else{
      error_notify("please fill the title, price and makat spots");
    }
  }

  const searchCards=(title)=>{
      Axios.post(getServerId()+"/search-product-byTitle", { params: { title: title } }).then(
        (res) => {
          let d = [...res.data]
          d.reverse()
          setProducts(d);
        }
      );
  }

   const updateCard=(product)=>{
    Axios.post(getServerId()+"/update-product",
    {params:{
      title:product.title,
      makat:product.makat,
      size:product.size,
      price:product.price,
      picture:product.picture,
      highlight:product.highlight,
      tags:product.tags,
      pass:managerPass,
      _id:product._id
       } }).then((res) => {
    if (res.status === 200) {
      success_notify(product.title+" updated Succefull!!"); 
      // Filter out the deleted product from the 'products' state
      getData()
    } else {
      console.log("Try Again Later!");
      error_notify("update doesnt work");
    }
  })
  .catch((error) => {
    error_notify("update dosnt work2");
    console.error("Error deleting product:", error);
  });
    console.log("make an update")
  }

    return (
      <div>
        <h2 style={{textAlign:"center"}} >search:</h2>
        <input style={{margin:"auto",display:"block"}} onChange={(res)=>searchCards(res.target.value)} />
      <div className='Row'>
        <Card handleSend = {handleSend} deleteItem = {deleteItem}  product={new Product("","","/","","",[],false,0)} last = {true} /> 
        {
          products.map((product,i)=>{
            return <div style={{display:"inline-block"}} key={product._id}> 
            <Card handleSend = {updateCard} deleteItem = {deleteItem} key={i} product = {product} last = {false} />
            </div>
          })
        }
         <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
/>
  <ToastContainer
  position="bottom-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
  />
      </div></div>
    );
  }
  