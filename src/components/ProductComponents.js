import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductComponents() {
  const params = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${params.category}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setCategoryProducts(data.products);
      });
  }, [params.category]);
  return (
    <div>
      <h3
        style={{ padding: "10px", fontFamily: "fantasy", textAlign: "center" }}
      >
        {params.category} List
      </h3>
      <div className="d-flex flex-wrap">
        {categoryProducts.map((item) => {
          return (
            <div
              className="card m-3 p-3"
              style={{ width: "230px" }}
              key={item.id}
            >
              <Link to={"/details/" + item.id}>
                <img
                  src={item.thumbnail}
                  height="120px"
                  className="card-img-top"
                  alt=""
                />
              </Link>
              <dl>
                <dt>Brand</dt>
                <dd>{item.title}</dd>
                <dt>Price</dt>
                <dd>${item.price}</dd>
                <dt>Rating⭐</dt>
                <dd>{item.rating}</dd>
              </dl>
            </div>
          );
        })}
      </div>
      <div className="container mt-2">
        <Link to="/category" style={{ textDecoration: "none" }}>
          <span className="bi bi-arrow-return-left"></span>Back To Categories
        </Link>
      </div>
    </div>
  );
}

export default ProductComponents;
