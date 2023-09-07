import Axios from 'axios';
export function getServerId(){
return "https://shiltei-server-khn8.onrender.com"
// return "http://localhost:8000"
} 

export async function getItems() {
    if (!localStorage.getItem("items")) return [];
    const itemsIds = JSON.parse(localStorage.getItem("items"));
    let items = [];
    const axiosPromises = itemsIds.map(async (itemId) => {
      const res = await Axios.post(getServerId() + "/search-product-byId", { id: itemId });
      items.push(res.data);
    });
    await Promise.all(axiosPromises); // Wait for all Axios requests to complete
    return items;
}
export async function addItems({id ,setItems}){
    let itemsIds =[id]
    const oldIds = JSON.parse(localStorage.getItem("items"));
    if(oldIds!==null)
    itemsIds=[...oldIds,id]
    localStorage.setItem('items', JSON.stringify(itemsIds));
    let items=[];
    const axiosPromises = itemsIds.map(async (itemId) => {
      const res = await Axios.post(getServerId() + "/search-product-byId", { id: itemId });
      items.push(res.data);
    });
    await Promise.all(axiosPromises); // Wait for all Axios requests to complete
    setItems(items)
       
}
export function clearAll({setItems}){
    let newItems =[]
   setItems(newItems)
  localStorage.setItem('items', JSON.stringify(newItems));
}

export function removeItem({setItems,deletedItem,items}){
    const oldIds = JSON.parse(localStorage.getItem("items"));
    const index = oldIds.indexOf(deletedItem._id);
    console.log(oldIds);
    oldIds.splice(index, 1);
    console.log(oldIds);
    localStorage.setItem('items', JSON.stringify(oldIds));
    getItems().then((res)=>{
        setItems(res)
    })
   
}
