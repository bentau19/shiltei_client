
export function getServerId(){
return "https://shiltei-server-khn8.onrender.com"
} 

export function getItems(){
    if(!localStorage.getItem("items")) return []
    return JSON.parse(localStorage.getItem("items"));
}
export function addItems({items, newPro ,setItems}){
        let newItems =[...items, newPro]
       setItems(newItems)
      localStorage.setItem('items', JSON.stringify(newItems));
}
export function clearAll({setItems}){
    let newItems =[]
   setItems(newItems)
  localStorage.setItem('items', JSON.stringify(newItems));
}

export function removeItem({setItems,deletedItem,items}){
    let newItems =[...items]
    const index = newItems.indexOf(deletedItem);
    newItems.splice(index, 1);
    setItems(newItems)
    localStorage.setItem('items', JSON.stringify(newItems));
}
