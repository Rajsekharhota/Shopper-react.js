import React from "react";
import { Link } from "react-router-dom";

function ShoppingHome() {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card">
            <img src="images/cover-1.jpeg" style={{ height: "400px" }} alt="" />
          </div>
          <div className="card-footer">
            <Link to="/women" className="btn btn-dark text-white w-100">
              Shop Women's<span className="bi bi-arrow-right"></span>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="images/cover-2.jpg" style={{ height: "400px" }} alt="" />
          </div>
          <div className="card-footer">
            <Link to="/men" className="btn btn-dark text-white w-100">
              Shop Men's<span className="bi bi-arrow-right"></span>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="images/cover-4.jpeg" style={{ height: "400px" }} alt="" />
          </div>
          <div className="card-footer">
            <Link to="jewellery" className="btn btn-dark text-white w-100">
              Shop Jewellery<span className="bi bi-arrow-right"></span>
            </Link>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="card">
            <img src="images/cover-5.jpeg" style={{ height: "300px" }} alt="" />
          </div>
          <div className="card-footer">
            <Link to="/electronics" className="btn btn-dark text-white w-100">
              Shop Electronics<span className="bi bi-arrow-right"></span>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="images/cover-6.jpeg" style={{ height: "300px" }} alt="" />
          </div>
          <div className="card-footer">
            <Link to="/shoes" className="btn btn-dark text-white w-100">
              Shop Shoes<span className="bi bi-arrow-right"></span>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="images/cover-8.jpeg" style={{ height: "300px" }} alt="" />
          </div>
          <div className="card-footer">
            <Link to="/grocery" className="btn btn-dark text-white w-100">
              Shop Groceries<span className="bi bi-arrow-right"></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingHome;
