"use client";

import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignup from "../_components/restaurantSignup";
import RestaurantHeader from "../_components/RestaurantHeader";
import RestaurantFooter from "../_components/RestaurantFooter";

const Restaurant = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="restaurant-page">
      <RestaurantHeader />
      <div className="container">
        <div className="auth-card">
          <h1 className="auth-title">Restaurant Portal</h1>

          <p className="auth-subtitle">
            Manage your restaurant account and grow your business.
          </p>

          {login ? <RestaurantLogin /> : <RestaurantSignup />}

          <div className="switch-wrapper">
            <button className="button-login" onClick={() => setLogin(!login)}>
              {login
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </div>

      <RestaurantFooter />
    </div>
  );
};

export default Restaurant;
