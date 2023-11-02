import { useState } from 'react';
import { getProducts } from '../../serverReq';
import { ProductComp } from '../Home/ProductComp';
import { useEffect } from 'react';
import './products.css';
const ProductsNav =({tags, currenttags,setCurrenttags,addDisplayedProducts})=>{
    return <div dir='rtl' className="Row">
    <h2  className="Column">מוצרים<span>{currenttags !== 'All' ? `/${currenttags}` : ''}</span></h2>
    <div className="Column search-bar1">
    <input type="text" dir="rtl" placeholder="חפש שלט" onChange={(data)=>{addDisplayedProducts({title:data.target.value,tag:currenttags,reset:true});}}/>
  </div>
    <div dir='ltr' style={{zIndex:4}} className="Column Row tags_container">
      {tags.map((c) => (
        <div key={c} className={`Column category ${currenttags === c ? 'active' : ''}`} onClick={() => { setCurrenttags(c); 
          addDisplayedProducts({tag:c,reset:true})
        }}>{c}</div>
      ))}
    </div>
  </div>
}

const ShowProducts = ({displayedProducts,viewProduct})=>{
    return <div className="rela-block product-item-container">
    {displayedProducts.map((item, index) => (
      <ProductComp key={index} info={item} view={viewProduct}  />
    ))}
  </div>
}

const LoadButton=({currenttags,addDisplayedProducts})=>{
    return <div className="rela-block load-button"
    style={{top:"20px"}}>
      <div className="rela-inline load-button-container" 
       onClick={()=>{addDisplayedProducts({tag:currenttags})}}
      >
        <p>טען עוד</p>
        <svg viewBox="0 0 50 50" className="button-svg">
          <path />
        </svg>
      </div>
    </div>
}

export const Products =({tags,viewProduct,items})=>{
    const [isEnd, setIsEnd] = useState(false);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [currenttags, setCurrenttags] = useState("All");

    useEffect(() => {
        setDisplayedProducts([...items]);
      }, []);
  
    const endCheck=(temp)=>{
        if(temp.length%12==0 &&temp.length!==0){setIsEnd(false)
        }else{setIsEnd(true)}
      }
  
    const addDisplayedProducts = async({title="",tag="",reset=false}) => {
        if (reset){
          let temp = await getProducts({skip:0,title:title,tags:tag})
          endCheck(temp)
          setDisplayedProducts([...temp])
        }else{
        let temp = await 
        getProducts({skip:displayedProducts.length,title:title,tags:tag})
        endCheck(temp)
        setDisplayedProducts((pro)=>[ ...pro,...temp])
        }
      }
   
   return <>
    <div id="products" className="rela-block page-section grey product-section">
    <div className="rela-block gutter-container">
    <ProductsNav tags={tags} currenttags={currenttags} 
    setCurrenttags={setCurrenttags} 
    addDisplayedProducts={addDisplayedProducts}/>
    <ShowProducts displayedProducts={displayedProducts} viewProduct={viewProduct}/>
    {!isEnd && 
    <LoadButton currenttags={currenttags} 
    addDisplayedProducts={addDisplayedProducts}/>}
    </div>
  </div>
  </>
}