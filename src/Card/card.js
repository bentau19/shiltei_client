import ItemInfoModal from '../Modal/ItemInfoModal';
import './Card.css';
function card(){
    return(
    <div className="card">
    <h1 style={{color: "white", padding:"10px",textDecoration:"underline"}}>coffee</h1>
    <h2 style={{color:"white"}}>10$</h2>
    <ItemInfoModal/>
    </div>);
}
export default card;
