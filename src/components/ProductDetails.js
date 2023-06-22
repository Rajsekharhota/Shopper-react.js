import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import AddToCart from "../ShopRedux/Action";

function ProductDetails() {
  const params = useParams();

  const [productDetails, setProductDetails] = useState({
    id: 0,
    brand: "",
    title: "",
    price: 0,
    description: "",
    rating: 0,
  });

  let dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setProductDetails(data);
      });
  }, [params.id]);
  return (
    <div>
      <h3
        style={{ padding: "10px", fontFamily: "fantasy", textAlign: "center" }}
      >
        Product Details
      </h3>
      <div className="row">
        <div className="col-6">
          <img
            src={productDetails.thumbnail}
            width="100%"
            height="590px"
            alt=""
          />
        </div>
        <div className="col-6" style={{ fontSize: "20px" }}>
          <dl>
            <dt>Title</dt>
            <dd>{productDetails.title}</dd>
            <dt>Brand</dt>
            <dd>{productDetails.brand}</dd>
            <dt>Description</dt>
            <dd className="w-50" style={{ textAlign: "justify" }}>
              {productDetails.description}
            </dd>
            <dt>Rating⭐</dt>
            <dd>{productDetails.rating}</dd>
            <dt>Stock</dt>
            <dd>{productDetails.stock}</dd>
            <dt>Price</dt>
            <dd>${productDetails.price}</dd>
            <dt>Discount%</dt>
            <dd>{productDetails.discountPercentage}</dd>
          </dl>
          <button
            className="btn btn-dark text-white w-100"
            onClick={() =>
              dispatch(
                AddToCart({
                  ...productDetails,
                  qty: 1,
                  price: productDetails.price,
                  total: productDetails.qty * productDetails.price,
                })
              )
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="mt-3">
        <Link
          to={"/products/" + productDetails.category}
          style={{ textDecoration: "none", color: "red", fontSize: "20px" }}
        >
          {" "}
          <span className="bi bi-arrow-return-left"></span>
          Back To Category
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
