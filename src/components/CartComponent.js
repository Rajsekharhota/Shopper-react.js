import React, { useState, useEffect } from "react";
import "./CartComponent.css";
import { useSelector, useDispatch } from "react-redux";
import { RemoveFromCart } from "../ShopRedux/Action";

function CartComponent() {
  let [total, setTotal] = useState(0);
  let dispatch = useDispatch();
  const cartItems = useSelector((state) => state.AddToCartReducer);

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("cartItems") || []);
    dispatch({ type: "FETCH_DATA", payload: items });
    const newTotal = items.reduce(
      (price, state) => price + state.qty * state.price,
      0
    );
    setTotal(newTotal);
  }, [dispatch]);

  const handleCheckout = () => {
    alert("Please Complete The Payment");
  };

  return (
    <div className="container-fluid">
      <div
        className="card-header"
        style={{
          textAlign: "center",
          fontFamily: "fantasy",
          marginTop: "25px",
        }}
      >
        <h2>
          Your Cart<span className="bi bi-cart-check"></span>
        </h2>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="cart-container">
            {cartItems &&
              cartItems.map((item, index) => {
                return (
                  <div className="row" key={index}>
                    <div className="col border border-1 border-secondary">
                      <ul className="list-group list-group-lg list-group-flush mb-5 border-bottom-3">
                        <li className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-3">
                              <img
                                src={item.thumbnail}
                                height="300"
                                width="200"
                                alt=""
                              />
                            </div>
                            <div className="col-9">
                              <div className="d-flex justify-content-between">
                                <div>
                                  <h4>{item.title}</h4>
                                  <p
                                    className="mb-5 text-dark"
                                    style={{ fontSize: "18px" }}
                                  >
                                    Rating:{item.rating}⭐
                                    <br />
                                    Discount:{item.discountPercentage}%
                                    <br />
                                    Brand:{item.brand}
                                    <div>
                                      <button
                                        className="plusQty"
                                        onClick={() => {
                                          dispatch({
                                            type: "MODIFIED",
                                            payload: {
                                              ...item,
                                              qty: item.qty + 1,
                                              total:
                                                item.price +
                                                item.qty * item.price,
                                            },
                                          });
                                        }}
                                      >
                                        +
                                      </button>
                                      <span>{item.qty}</span>
                                      <button
                                        className="minusQty"
                                        disabled={item.qty === 1}
                                        onClick={() => {
                                          dispatch({
                                            type: "MODIFIED",
                                            payload: {
                                              ...item,
                                              qty: item.qty - 1,
                                            },
                                          });
                                        }}
                                      >
                                        -
                                      </button>
                                    </div>
                                  </p>
                                </div>
                                <div style={{ fontSize: "22px" }}>
                                  ${item.price * item.qty}.00
                                  <div className="remove-button">
                                    <button
                                      onClick={() =>
                                        dispatch(RemoveFromCart(item))
                                      }
                                      className="btn btn-dark mt-5"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="col-4 mt-4">
          <div className="card">
            <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
              <li className="list-group-item d-flex">
                <span>Subtotal</span>
                <span className="ms-auto fs-sm">${total}</span>
              </li>
              <li className="list-group-item d-flex">
                <span>Tax</span>
                <span className="ms-auto fs-sm">$00.00</span>
              </li>
              <li className="list-group-item d-flex fs-lg fw-bold">
                <span>Total</span>
                <span className="ms-auto fs-sm">${total}</span>
              </li>
              <li className="list-group-item fs-sm text-center text-secondary">
                Shipping cost calculated at Checkout *
              </li>
            </ul>
          </div>
          <button
            className="btn btn-fill btn-dark text-white w-100 mb-2"
            onClick={handleCheckout}
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
      <div className="features-section align-content-center">
        <div className="row mx-5">
          <div className="col-3">
            <span className="bi bi-truck text-danger"></span>
            FREE SHIPPING
            <p className="text-secondary">From all orders over $100</p>
          </div>
          <div className="col-3">
            <span className="bi bi-repeat text-danger"></span>
            FREE RETURNS
            <p className="text-secondary">Return money within 30days</p>
          </div>
          <div className="col-3">
            <span className="bi bi-lock text-danger"></span>
            SECURE SHOPPING
            <p className="text-secondary">You're in safe hands</p>
          </div>
          <div className="col-3">
            <span className="bi bi-tag text-danger"></span>
            OVER 10,000 STYLES
            <p className="text-secondary">We have everything you need</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartComponent;
