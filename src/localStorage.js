import Axios from 'axios';
export function getServerId(){
  // return "https://shilteiserver-production.up.railway.app"
//  return "https://shiltei-server-khn8.onrender.com"
 return "http://localhost:8000"
} 

export function getItems() {
    if (!localStorage.getItem("items")) return [];
    const itemsIds = JSON.parse(localStorage.getItem("items"));
    return itemsIds
}

export async function idToItem(Id) {
  try {
    const response = await Axios.post(getServerId() + "/search-product-byId", { id: Id });
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error; // Rethrow the error to handle it further up the call stack if needed.
  }
}

export function addItems({id ,setItems}){
    let itemsIds =[]
    const oldIds = JSON.parse(localStorage.getItem("items"));
    if(oldIds!==null)
    itemsIds=[...oldIds,id]
  else
    itemsIds=[id]
    localStorage.setItem('items', JSON.stringify(itemsIds));
    setItems(itemsIds)
       
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
