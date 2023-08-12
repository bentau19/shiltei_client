import './HomePage.css';
import ItemInfoModal from '../Modal/ItemInfoModal';

function App() {
  return (
    <div>
 
      <div className="card">
      <h1 style={{color: "white", padding:"10px",textDecoration:"underline"}}>coffee</h1>
      <h2 style={{color:"white"}}>10$</h2>
      <ItemInfoModal/>
      </div>
    </div>
  );
}

export default App;
