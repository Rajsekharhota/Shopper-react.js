import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function GroceryShopping() {
  const [groceryProducts, setGroceryProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/groceries")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setGroceryProducts(data.products);
      });
  }, []);
  return (
    <div className="container-fluid">
      <h3
        style={{ padding: "12px", fontFamily: "fantasy", textAlign: "center" }}
      >
        Groceries
      </h3>
      <div className="d-flex flex-wrap justify-content-around">
        {groceryProducts.map((product) => {
          return (
            <div
              className="card m-2"
              style={{ width: "200px", boxShadow: "0 0 18px 0 black" }}
              key={product.id}
            >
              <Link to={"/details/" + product.id}>
                <img
                  src={product.thumbnail}
                  height="160px"
                  className="card-img-top"
                  alt=""
                />
              </Link>
              <div className="card-header">
                <h6>{product.title}</h6>
              </div>
              <div className="card-body">
                <dl>
                  <dt>Price</dt>
                  <dd>${product.price}</dd>
                  <dt>Rating⭐</dt>
                  <dd>{product.rating}</dd>
                </dl>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GroceryShopping;
