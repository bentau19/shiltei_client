import { addItems } from '../../../localStorage';
import '../testHome.css'
export const FullViewComp =({setProductViewOpen,viewedProduct,setCart})=>{
    return <div className="rela-block gutter-container">
    <div className="rela-block section-nav">
      <h2 className="left">Product View</h2>
      <div className="rela-inline right close-button" onClick={() => setProductViewOpen(false)}>
        <svg viewBox="0 0 30 30" className="button-svg">
          <path d="M 8 8 L 22 22" />
          <path d="M 22 8 L 8 22" />
        </svg>
      </div>
    </div>
    <div className="rela-block pv-container">
      <div className="rela-block pv-pic" style={{ 'background': `url('${viewedProduct.picture}') center no-repeat` }} />
    
    
    <div className="rela-block pv-container">
      <div className="rela-block pv-info">
        <h2 className="rela-block" style={{textTransform: "uppercase"}}>{viewedProduct.title}</h2>
        <h3 className="rela-block">Size:{viewedProduct.size}</h3>
        {/* <div className="rela-block info-row">
          <div className="rela-inline left">Release Date: </div>
          <div className="rela-block text">{viewedProduct.date || 'No Release Date'}</div>
        </div> */}
        <div className="rela-block info-row">
          <div className="rela-inline left">Product Category: </div>
          <div className="rela-block text">{viewedProduct.tags || 'No Category'}</div>
        </div>
        {/* <div className="rela-block info-row">
          <div className="rela-inline left">Product Description: </div>
          <div className="rela-block text">{viewedProduct.desc || 'No Description'}</div>
        </div> */}
      </div>
    </div>
    </div><div className="btn btn__primary" onClick={()=>{addItems({
         id : viewedProduct._id, 
         setItems:setCart,
      });setProductViewOpen(false);}}><p>Add To Basket</p></div>
    <div className="rela-block pv-container">
      <h2>Related Items</h2>
      <div className="rela-block pv-related-container">
        Other {viewedProduct.tags} products here
      </div>
    </div>
  </div>
}