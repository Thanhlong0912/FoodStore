import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-light border-0">
        <img
          src="/assets/bg.jpg"
          class="card-img"
          alt="Background"
          height="550px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
