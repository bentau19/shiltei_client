import { useEffect, useState } from "react"
import { idToItem } from "../../localStorage";
import styles from './sellStyle.module.css';
import { ListedProduct } from "../../ListedProductClass";
//   Products,TradeNum,price,name,ship,email,stage,date

export const SellLine=({order,setFItems,i,setOrder,chosen,setChosenId})=>{
  const stage =["חדש!","נקרא","ייצור","אריזה","משלוח","הגיע"]

    const [items,setItems]=useState([]);
    const [tdClass,setTdClass]=useState("");
    useEffect(()=>{
        getItems();
    },[])
    useEffect(()=>{
      console.log("changed!!")
      if(chosen){
        setTdClass(styles.chosen)
      }else{
        if(order.stage===6){
          setTdClass(styles.completed)
        }else{if (order.stage===1){
          setTdClass(styles.new)
        }else{
          setTdClass("")
        }
      }
      }
    },[order.stage,chosen])

    const getTime=()=>{
        let array= order.createdAt.split('T')
      return<td className={tdClass}>{array[0]} <br/> Time:{array[1].split('.')[0]}</td>
    }

    const onChoice=()=>{
      setChosenId(i)
      // myRef.current.style.background = 'green';
      setFItems(items);
      setOrder(order);
    }


    const getItems = async () => {
        try {
          let updatedItems = []; // Create a new array to hold the updated items
      
          for (let i = 0; i < order.items.length; i++) {
            let id = order.items[i];
            let tempItem = await idToItem(id);
            let tempPro= new ListedProduct(tempItem,id.content,id.comment)
            updatedItems.push(tempPro); // Add the new item to the updated array
          }
          setItems(updatedItems); // Update the state with the new array of items
        } catch (e) {
          console.log(e);
        }
      };

    return <tr onClick={onChoice} >
      <td className={tdClass}>{stage[order.stage-1]}</td>
        <td className={tdClass}>
            {
        items.map((product,n)=>{
            return <p key={n}>{n+1}.{product.id.title}</p>
        })}
        </td>
        <td className={tdClass}>{order.tradeNum}</td>
        <td className={tdClass}>{order.totalPrice}</td>
        <td className={tdClass}>{order.name}</td>
        {order.ship?<td className={tdClass}>
            House:{order.ship["house"]} <br/>
            Street:{order.ship["street"]} <br/>
            City:{order.ship["city"]} 
        
        </td>:
        <td className={tdClass}>Self Recive</td>
        }
        {getTime()}
        </tr>
}