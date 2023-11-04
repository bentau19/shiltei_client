import { useState } from 'react';
import { getProducts } from '../../serverReq';
import { ProductComp } from '../Home/ProductComp';
import { useEffect } from 'react';
import { Icon } from '@iconify/react';
import './products.css';
const ProductsNav =({tags, currenttags,setCurrenttags,addDisplayedProducts})=>{
  const tagsFull = [...tags];
  const tagsTwo = tagsFull.splice(0, 2);
  const [rotation,setRotetion]=useState(2)
  const [color,setColor]=useState("#b2b2b2")
  const clickHandle=()=>{
    if (rotation%4===2) setColor("black")
    else setColor("#b2b2b2")
    setRotetion((ans)=>ans+2);
  }

    return <><div dir='rtl' className="Row">
    <h2 style={{width:"0"}} className="Column">מוצרים<span>{currenttags !== 'הכל' ? `/${currenttags}` : ''}</span></h2>
    <div className="Column search-bar1">
    <input type="text" dir="rtl" placeholder="חפש שלט" onChange={(data)=>{addDisplayedProducts({title:data.target.value,tag:currenttags,reset:true});}}/>
  </div>
    <div dir='ltr' style={{zIndex:4}} className="Column Row tags_container">
      {tagsTwo.map((c) => (
        <div key={c} className={`Column category ${currenttags === c ? 'active' : ''}`} onClick={() => { setCurrenttags(c); 
          addDisplayedProducts({tag:c,reset:true})
        }}>{c}</div>
      ))}
      <div className='Column' style={{ cursor:"pointer", position:"relative",top:"4px"}}>
      <Icon icon="fluent-emoji-high-contrast:up-arrow" style={{transition:"0s",color:color}} onClick={clickHandle}  rotate={rotation}  width={25}/>
      </div>
    </div>
  </div>
  <div style={{backgroundColor:"white", border:rotation%4===0&&"1px solid black"}}>
  {rotation%4===0&&tagsFull.map((c) => (
        <>
        <div key={c} style={{padding:"5px"}} className={`Column category ${currenttags === c ? 'active' : ''}`} onClick={() => { setCurrenttags(c); 
          addDisplayedProducts({tag:c,reset:true})
        }}>{c}</div>
        <div className={'Column category'}>|</div>
        </>
      ))}
      </div>
  </>
}

const ShowProducts = ({displayedProducts,viewProduct})=>{
    return <div className="proComp_contain_div ">
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
        <p style={{fontSize:"25px"}}>טען עוד</p>
        <svg viewBox="0 0 50 50" className="button-svg">
          <path />
        </svg>
      </div>
    </div>
}

export const Products =({tags,viewProduct,items})=>{
    const [isEnd, setIsEnd] = useState(false);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [currenttags, setCurrenttags] = useState("הכל");

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
    <div className="rela-block ">
      <div className='gutter-container'>
    <ProductsNav tags={tags} currenttags={currenttags} 
    setCurrenttags={setCurrenttags} 
    addDisplayedProducts={addDisplayedProducts}/>
    </div>
    <div >
    <ShowProducts  displayedProducts={displayedProducts} viewProduct={viewProduct}/>
    </div>
    {!isEnd && 
    <LoadButton currenttags={currenttags} 
    addDisplayedProducts={addDisplayedProducts}/>}
    </div>
  </div>
  </>
}