import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
export const ManagerLogin=()=>{
    const inputRef = useRef(null);
    const navigate = useNavigate();
    function handleClick() {
        Axios.post("http://localhost:8000/manager-login", { params: { password: inputRef.current.value } }).then(
            (res) => {
                if (res.data==="pass"){
                    
                    navigate(`/managerHome`, {state:{managerPass:inputRef.current.value}});
                }else{
                    console.log("false!")
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

    </div>
}