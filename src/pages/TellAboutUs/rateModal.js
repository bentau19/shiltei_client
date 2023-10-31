import "./rateModal.css"

export const Stars = ({setRate})=>{
    return <div dir="ltr" className="advice-rating">
      <form className="rating">
    <div className="rating__stars">
      <input
        id="rating-1"
        className="rating__input rating__input-1"
        type="radio"
        name="rating"
        defaultValue={1}
      />
      <input
        id="rating-2"
        className="rating__input rating__input-2"
        type="radio"
        name="rating"
        defaultValue={2}
      />
      <input
        id="rating-3"
        className="rating__input rating__input-3"
        type="radio"
        name="rating"
        defaultValue={3}
      />
      <input
        id="rating-4"
        className="rating__input rating__input-4"
        type="radio"
        name="rating"
        defaultValue={4}
      />
      <input
        id="rating-5"
        className="rating__input rating__input-5"
        type="radio"
        name="rating"
        defaultValue={5}
      />
      <label onClick={()=>setRate(1)} className="rating__label" htmlFor="rating-1">
        <svg
        
          className="rating__star"
          width={32}
          height={32}
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <ellipse
            className="rating__star-shadow"
            cx={16}
            cy={31}
            rx={16}
            ry={1}
          />
          <g className="rating__star-body-g">
            <path
              className="rating__star-body"
              d="M15.5,26.8l-8.2,4.3c-0.8,0.4-1.7-0.3-1.6-1.1l1.6-9.2c0.1-0.3-0.1-0.7-0.3-1l-6.7-6.5c-0.6-0.6-0.3-1.7,0.6-1.8l9.2-1.3c0.4-0.1,0.7-0.3,0.8-0.6L15,1.3c0.4-0.8,1.5-0.8,1.9,0l4.1,8.3c0.2,0.3,0.5,0.5,0.8,0.6l9.2,1.3c0.9,0.1,1.2,1.2,0.6,1.8L25,19.9c-0.3,0.2-0.4,0.6-0.3,1l1.6,9.2c0.2,0.9-0.8,1.5-1.6,1.1l-8.2-4.3C16.2,26.7,15.8,26.7,15.5,26.8z"
            />
          </g>
        </svg>
        <span className="rating__sr">1 star</span>
      </label>
      <label onClick={()=>setRate(2)} className="rating__label" htmlFor="rating-2">
        <svg
          className="rating__star"
          width={32}
          height={32}
          viewBox="0 0 32 32"
          aria-hidden="true"
          
        >
          <ellipse
            className="rating__star-shadow"
            cx={16}
            cy={31}
            rx={16}
            ry={1}
          />
          <g className="rating__star-body-g">
            <path
              className="rating__star-body"
              d="M15.5,26.8l-8.2,4.3c-0.8,0.4-1.7-0.3-1.6-1.1l1.6-9.2c0.1-0.3-0.1-0.7-0.3-1l-6.7-6.5c-0.6-0.6-0.3-1.7,0.6-1.8l9.2-1.3c0.4-0.1,0.7-0.3,0.8-0.6L15,1.3c0.4-0.8,1.5-0.8,1.9,0l4.1,8.3c0.2,0.3,0.5,0.5,0.8,0.6l9.2,1.3c0.9,0.1,1.2,1.2,0.6,1.8L25,19.9c-0.3,0.2-0.4,0.6-0.3,1l1.6,9.2c0.2,0.9-0.8,1.5-1.6,1.1l-8.2-4.3C16.2,26.7,15.8,26.7,15.5,26.8z"
            />
          </g>
        </svg>
        <span className="rating__sr">2 stars</span>
      </label>
      <label onClick={()=>setRate(3)} className="rating__label" htmlFor="rating-3">
        <svg
          className="rating__star"
          width={32}
          height={32}
          viewBox="0 0 32 32"
          aria-hidden="true"
          
        >
          <ellipse
            className="rating__star-shadow"
            cx={16}
            cy={31}
            rx={16}
            ry={1}
          />
          <g className="rating__star-body-g">
            <path
              className="rating__star-body"
              d="M15.5,26.8l-8.2,4.3c-0.8,0.4-1.7-0.3-1.6-1.1l1.6-9.2c0.1-0.3-0.1-0.7-0.3-1l-6.7-6.5c-0.6-0.6-0.3-1.7,0.6-1.8l9.2-1.3c0.4-0.1,0.7-0.3,0.8-0.6L15,1.3c0.4-0.8,1.5-0.8,1.9,0l4.1,8.3c0.2,0.3,0.5,0.5,0.8,0.6l9.2,1.3c0.9,0.1,1.2,1.2,0.6,1.8L25,19.9c-0.3,0.2-0.4,0.6-0.3,1l1.6,9.2c0.2,0.9-0.8,1.5-1.6,1.1l-8.2-4.3C16.2,26.7,15.8,26.7,15.5,26.8z"
            />
          </g>
        </svg>
        <span className="rating__sr">3 stars</span>
      </label>
      <label onClick={()=>setRate(4)} className="rating__label" htmlFor="rating-4">
        <svg
          className="rating__star"
          width={32}
          height={32}
          viewBox="0 0 32 32"
          aria-hidden="true"
          
        >
          <ellipse
            className="rating__star-shadow"
            cx={16}
            cy={31}
            rx={16}
            ry={1}
          />
          <g className="rating__star-body-g">
            <path
              className="rating__star-body"
              d="M15.5,26.8l-8.2,4.3c-0.8,0.4-1.7-0.3-1.6-1.1l1.6-9.2c0.1-0.3-0.1-0.7-0.3-1l-6.7-6.5c-0.6-0.6-0.3-1.7,0.6-1.8l9.2-1.3c0.4-0.1,0.7-0.3,0.8-0.6L15,1.3c0.4-0.8,1.5-0.8,1.9,0l4.1,8.3c0.2,0.3,0.5,0.5,0.8,0.6l9.2,1.3c0.9,0.1,1.2,1.2,0.6,1.8L25,19.9c-0.3,0.2-0.4,0.6-0.3,1l1.6,9.2c0.2,0.9-0.8,1.5-1.6,1.1l-8.2-4.3C16.2,26.7,15.8,26.7,15.5,26.8z"
            />
          </g>
        </svg>
        <span className="rating__sr">4 stars</span>
      </label>
      <label onClick={()=>setRate(5)} className="rating__label" htmlFor="rating-5">
        <svg
          className="rating__star"
          width={32}
          height={32}
          viewBox="0 0 32 32"
          aria-hidden="true"
          
        >
          <ellipse
            className="rating__star-shadow"
            cx={16}
            cy={31}
            rx={16}
            ry={1}
          />
          <g className="rating__star-body-g">
            <path
              className="rating__star-body"
              d="M15.5,26.8l-8.2,4.3c-0.8,0.4-1.7-0.3-1.6-1.1l1.6-9.2c0.1-0.3-0.1-0.7-0.3-1l-6.7-6.5c-0.6-0.6-0.3-1.7,0.6-1.8l9.2-1.3c0.4-0.1,0.7-0.3,0.8-0.6L15,1.3c0.4-0.8,1.5-0.8,1.9,0l4.1,8.3c0.2,0.3,0.5,0.5,0.8,0.6l9.2,1.3c0.9,0.1,1.2,1.2,0.6,1.8L25,19.9c-0.3,0.2-0.4,0.6-0.3,1l1.6,9.2c0.2,0.9-0.8,1.5-1.6,1.1l-8.2-4.3C16.2,26.7,15.8,26.7,15.5,26.8z"
            />
          </g>
        </svg>
        <span className="rating__sr">5 stars</span>
      </label>
    </div>
  </form>
    </div>
  }
  