import Axios from 'axios';
import { ListedProduct } from './ListedProductClass';
export function getServerId(){
  return "https://shilteiserver-production.up.railway.app"
//  return "https://shiltei-server-khn8.onrender.com"
    // return "http://localhost:8000"
}  

export function getItems() {
    if (!localStorage.getItem("items")) return [];
    const itemsIds = JSON.parse(localStorage.getItem("items"));
    return itemsIds
}

export async function idToItem(Id) {
  try {
    const response = await Axios.post(getServerId() + "/search-product-byId", { id: Id.id });
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error; // Rethrow the error to handle it further up the call stack if needed.
  }
}

export function addItems({id, content, comments, setItems}){
    let itemsIds =[]
    const oldIds = JSON.parse(localStorage.getItem("items"));
    const listed = new ListedProduct(id,content,comments);
    console.log(listed);
    if(oldIds!==null)
    itemsIds=[...oldIds,listed]
  else
    itemsIds=[listed]
    localStorage.setItem('items', JSON.stringify(itemsIds));
    setItems(itemsIds)   
}

export function updateItem({id, place}){
  let itemsIds =JSON.parse(localStorage.getItem("items"));
  itemsIds[place]=id.id;
  console.log(itemsIds)

  localStorage.setItem('items', JSON.stringify(itemsIds));
}

export function clearAll({setItems}){
    let newItems =[]
   setItems(newItems)
  localStorage.setItem('items', JSON.stringify(newItems));
}

export function removeItem({setItems,index}){
    const oldIds = JSON.parse(localStorage.getItem("items"));
    oldIds.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(oldIds));
    setItems(oldIds)
}
