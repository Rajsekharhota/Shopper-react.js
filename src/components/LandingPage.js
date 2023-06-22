import React from "react";
import "./LandingPage.css";
import CarouselComponent from "./CarouselComponent";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="container-fluid">
      <div className="carousel-section">
        <CarouselComponent />
      </div>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
            <h5 className="mb-3 text-secondary">New Collection</h5>
            <h2 className="mb-4">Best Picks 2023</h2>
            <p className="mb-5 text-secondary">
              Appear, dry there darkness they're seas, dry waters thing fly
              midst. Beast, above fly brought Very green.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 col-lg-4 d-flex flex-column">
            <div className="card mb-5 text-white">
              <div className="card1-bg">
                <div className="card-body text-center">
                  <h4 className="mb-0 text-white">Bags Collection</h4>
                  <div className="my-auto">
                    <Link to="/home">
                      Shop now<span className="bi bi-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-8 d-flex flex-column">
            <div className="card mb-5 text-white">
              <div className="card2-bg">
                <div className="card-body text-center">
                  <h4 className="mb-0 text-dark fs-3">Printed Men's Shirt</h4>
                  <div className="my-auto">
                    <Link to="/men">
                      Shop now<span className="bi bi-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-8 d-flex flex-column">
            <div className="card mb-5 text-white">
              <div className="card3-bg">
                <div className="card-body text-center">
                  <h4 className="mb-0 text-dark">Basic Women's Dresses</h4>
                  <div className="my-auto">
                    <Link to="/women">
                      Shop now<span className="bi bi-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-4 d-flex flex-column">
            <div className="card mb-5 text-white">
              <div className="card4-bg">
                <div className="card-body text-center">
                  <h4 className="mb-0 text-white">Shop Smartphones</h4>
                  <div className="my-auto">
                    <Link to="/electronics">
                      Shop now<span className="bi bi-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mb-0">@Shopper</h2>
            <p className="mt-1 text-secondary mb-5 fs-5">
              Appear, dry there darkness they're seas, dry waters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
