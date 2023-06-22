import React from "react";
import "./Shopping.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ShoppingHome from "./ShoppingHome.js";
import MenShopping from "./MenShopping.js";
import WomenShopping from "./WomenShopping.js";
import WomenJewelleryShopping from "./JewelleryShopping.js";
import ElectronicsShopping from "./ElectronicsShopping.js";
import ShoeShopping from "./ShoeShopping.js";
import GroceryShopping from "./GroceriesShopping.js";
import ShoppingCategories from "./ShoppingCategories.js";
import ProductComponents from "./ProductComponents.js";
import ProductDetails from "./ProductDetails.js";
import CartComponent from "./CartComponent";
import { useSelector } from "react-redux";
import LandingPage from "./LandingPage";

function ShoppingIndex() {
  let CartProducts = useSelector((state) => state.AddToCartReducer);
  return (
    <div>
      <BrowserRouter>
        <header className="d-flex justify-content-between bg-dark text-white p-3 w-100">
          <div>
            <Link to="/">
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "23px",
                  color: "yellow",
                }}
              >
                Shopper.
              </span>
            </Link>
          </div>
          <div>
            <span className="me-3">
              <Link to="/home">Home</Link>
            </span>
            <span className="me-3">
              <Link to="/men">Men</Link>
            </span>
            <span className="me-3">
              <Link to="/women">Women</Link>
            </span>
            <span className="me-3">
              <Link to="/jewellery">Jewellery</Link>
            </span>
            <span className="me-3">
              <Link to="/electronics">Electronics</Link>
            </span>
            <span className="me-3">
              <Link to="/grocery">Groceries</Link>
            </span>
            <span className="me-3">
              <Link to="/category">Categories</Link>
            </span>
          </div>
          <div>
            <span className="bi bi-person me-3 fs-5"></span>
            <Link to="/cart" className="fs-5">
              <span className="bi bi-cart4 me-3"></span>
              {/* <sup className="cart-quantity">
                {CartProducts.length === 0 ? null : CartProducts.length}
              </sup> */}
              {CartProducts.length === 0 ? null : (
                <sup className="cart-quantity">{CartProducts.length}</sup>
              )}
            </Link>
          </div>
        </header>
        <div
          className="bg-dark text-white mt-1"
          style={{ textAlign: "center" }}
        >
          ⚡Happy Holiday Deals On Everything⚡
        </div>
        <section className="mt-1">
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/home" element={<ShoppingHome />}></Route>
            <Route path="/men" element={<MenShopping />}></Route>
            <Route path="/women" element={<WomenShopping />}></Route>
            <Route path="/shoes" element={<ShoeShopping />}></Route>
            <Route path="/grocery" element={<GroceryShopping />}></Route>
            <Route path="/category" element={<ShoppingCategories />}></Route>
            <Route
              path="/electronics"
              element={<ElectronicsShopping />}
            ></Route>
            <Route
              path="/jewellery"
              element={<WomenJewelleryShopping />}
            ></Route>
            <Route
              path="/products/:category"
              element={<ProductComponents />}
            ></Route>
            <Route path="/details/:id" element={<ProductDetails />}></Route>
            <Route path="/cart" element={<CartComponent />}></Route>
            <Route
              path="*"
              element={<code>Page You Requested Not Found!</code>}
            ></Route>
          </Routes>
        </section>
        <footer className="row p-3 bg-dark text-white m-1">
          <div className="col">
            <ul className="list-unstyled">
              <li>
                <h6>SUPPORT</h6>
              </li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Size Guide</li>
              <li>Shipping & Returns</li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-unstyled">
              <li>
                <h6>SHOP</h6>
              </li>
              <li>Men's Shopping</li>
              <li>Women's Shopping</li>
              <li>Jewellery Shopping</li>
              <li>Discounts</li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-unstyled">
              <li>
                <h6>COMPANY</h6>
              </li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Size Guide</li>
              <li>Shipping & Returns</li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-unstyled">
              <li>
                <h6>CONTACT</h6>
              </li>
              <li>1-202-555-0105</li>
              <li>1-202-555-0106</li>
              <li>help@shopper.com</li>
            </ul>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default ShoppingIndex;
