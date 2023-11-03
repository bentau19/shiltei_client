import './testHome.css'

export function ProductComp({ info, view }) {
    return (
      <div  className={`rela-inline product-card pointer`}onClick={() => view(info)} key={info._id} style={{ textAlign:"right", 'animationDelay': `${info.delay * 0.1}s` }}>
        <div className="rela-block product-pic" style={{ 'background': `url(${info.picture}) center no-repeat` }}>
          <div className="product-view-button" onClick={() => view(info)}>הצג</div>
        </div>
        <div dir="rtl" className="rela-block product-info">
        <div className="vert-center product-cost ">
        <p>{info.title}</p>
            <p className="product-artist">גודל: {info.size}</p>
       
          </div>
          <div className="rela-block product-cost " style={{textAlign:"left"}}>
          ₪{info.price}
          </div>
          
        </div>
      </div>
    );
  }