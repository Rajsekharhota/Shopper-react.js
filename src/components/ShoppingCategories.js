import React, { useState, useEffect } from "react";
import "./ShoppingCategories.css";
import { Link } from "react-router-dom";

function ShoppingCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setCategories(data);
      });
  }, []);
  return (
    <div className="container-fluid">
      <h3
        style={{ padding: "12px", fontFamily: "fantasy", textAlign: "center" }}
      >
        Categories
      </h3>
      <div className="row">
        <div className="col-7 d-flex flex-wrap justify-content-around">
          {categories.map((category) => {
            return (
              <div className="card w-25 m-2" key={category}>
                <img
                  src="images/ShopCart.gif"
                  width="30px"
                  height="90px"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-header">
                  <Link to={"/products/" + category}>{category}</Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-5"></div>
      </div>
    </div>
  );
}

export default ShoppingCategories;
