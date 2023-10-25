import { useState,useEffect } from 'react';
import Axios from 'axios';
import { useLocation } from 'react-router-dom';
import { getServerId } from '../../localStorage';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigationContext } from '../../NavigationContext';
import { TableMaker } from './tableMaker';
import { FullViewMaker } from './fullViewMaker';
export function SellScreen() {
  const [items,setItems]=useState([]) 
  const [order, setOrder]=useState("") 
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
  const [sells,setSells] = useState([]);
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
                console.log(res.data)
                navigate('/managerLogin');
            }
        }
      );
    }

    const getData=()=>{
      Axios.post(getServerId()+"/get-sells",{ params: { password: managerPass } }).then((res) => {
        let d = [...res.data]
        d.reverse()
        console.log(d)
        setSells(d);
      })
    }

    useEffect(() => {
      // Find the index of the item in the sells array based on the order's _id
      const indexToUpdate = sells.findIndex(x => x._id === order._id);
      if (indexToUpdate !== -1) {
        // Create a copy of the sells array and update the specific item
        const updatedSells = [...sells];
        updatedSells[indexToUpdate].stage = order.stage;
        // Update the sells state with the new array
        setSells(updatedSells);
      }
    }, [order]);    

    return (
      <div >
        <div >
        {FullViewMaker(items,order,setOrder,managerPass)}
        {TableMaker(sells,setItems,setOrder, order)}

        </div>
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
      </div>
    );
  }
  