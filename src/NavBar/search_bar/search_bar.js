import "./search_bar.css";
import CloseIcon from '@mui/icons-material/Close'; 
import SearchIcon from '@mui/icons-material/Search';
import Axios from 'axios';
import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getServerId } from "../../localStorage";

function Search_bar() {
  const myRef = useRef(null);
  const navigate = useNavigate();
  
  const [items, setItems] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const openInput = () => {
    setShowResults(true);
    myRef.current.style.width = "240px";
    myRef.current.style.padding = "0 6px";
  };

  const onChangeHandler = () => {
    const title = myRef.current.value;
    if (title !== "") {
      Axios.post(getServerId()+"/search-product-byTitle", { params: { title: title } }).then(
        (res) => {
          setItems(res.data);
          console.log(res.data);
        }
      );
    } else {
      setItems([]);
    }
  };

  const navigateToItemDetail = (id) => {
    closeInput()
    navigate(`/product/${id}`);
  };

  const closeInput = () => {
    setShowResults(false);
    setItems([]);
    myRef.current.value="";
    myRef.current.style.width = "0px";
    myRef.current.style.padding = "0";
  };

  return (
    <div className='rowC'>
      {showResults ? (
        <button
          style={{ margin: "10px" }}
          onClick={closeInput}
          className="searchButton"
        >
          <CloseIcon />
        </button>
      ) : null}
      <div className="rowC">
        <div className="searchBox">
          <input
            id="searchInput"
            onMouseOver={openInput}
            onChange={onChangeHandler}
            ref={myRef}
            className="searchInput"
            type="text"
            name=""
            placeholder="Search"
          ></input>
          <button
            id="searchButton"
            onMouseOver={openInput}

            className="searchButton"
          >
            <SearchIcon />
          </button>
        </div>
        <div className="columnC">
          {showResults
            ? items.map((item, i) => (
                <div
                onClick={()=>navigateToItemDetail(item.title)}
                  className="resultLine"
                  style={
                    i % 2 === 0
                      ? { backgroundColor: "black" }
                      : { backgroundColor: "#2f3640" }
                  }
                  key={i}
                >
                  <p style={{ paddingLeft: "20px" }}>{item.title}</p>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Search_bar;
