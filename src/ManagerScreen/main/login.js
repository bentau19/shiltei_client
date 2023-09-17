import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { getServerId } from '../../localStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const ManagerLogin=({setPass})=>{
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
    const inputRef = useRef(null);
    const navigate = useNavigate();
    function handleClick() {
        Axios.post(getServerId()+"/manager-login", { params: { password: inputRef.current.value } }).then(
            (res) => {
                if (res.data==="wrong"){
                    error_notify("false password!")
                    console.log("false!")
                    
                }else{
                    if(res.status===200){
                        setPass(inputRef.current.value);
                        navigate(res.data, {state:{managerPass:inputRef.current.value}});
                    }else{
                        console.log("server Error!")
                    }
                    
                }
            }
          );
        console.log(inputRef.current.value);
      }
    return <div style={{
        textAlign:"center"
    }}>
        <h1>Enter Code:</h1>
        <input ref={inputRef}type="text"/>
        <button onClick={handleClick}>Enter</button>
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
}