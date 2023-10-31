import './testHome.css'

export function ProductComp({ info, view }) {
    return (
      <div  className={`rela-inline product-card pointer`}onClick={() => view(info)} key={info._id} style={{ 'animationDelay': `${info.delay * 0.1}s` }}>
        <div className="rela-block product-pic" style={{ 'background': `url(${info.picture}) center no-repeat` }}>
          <div className="product-view-button" onClick={() => view(info)}>View</div>
        </div>
        <div className="rela-block product-info">
          <div className="rela-block">
            <p>{info.title}</p>
            <p className="product-artist">Size:{info.size}</p>
          </div>
          <div className="vert-center product-cost">₪{info.price}</div>
        </div>
      </div>
    );
  }