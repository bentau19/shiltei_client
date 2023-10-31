import "./leftBar.css";

export const LeftBar=({setMenuOpen})=>{
    const scrollToPlace= async (location) => {
        setMenuOpen(false)
        await new Promise((resolve) => setTimeout(resolve, 250));
          window.location.href = location;
      }

    return <div className="menu">
    <p  onClick={async (e) => {scrollToPlace("#products")}} className="block pointer">מוצרים</p>
      <p onClick={async (e) => {scrollToPlace("#aboutUs")}} className="block pointer">עלינו</p>
      <p onClick={async (e) => {scrollToPlace("#tellAboutUs")}} className="block pointer">מספרים עלינו</p>
      <p onClick={async (e) => {scrollToPlace("#contact")}} className="block pointer">צור קשר</p>
    </div>
}