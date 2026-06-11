const RestaurantSignup = () => {
  return (
    <>
      <h3 className="form-title">Create Account</h3>

      <div className="input-wrapper">
        <input
          type="email"
          placeholder="Enter email address"
          className="input-field"
        />
      </div>

      <div className="input-wrapper">
        <input
          type="password"
          placeholder="Enter password"
          className="input-field"
        />
      </div>

      <div className="input-wrapper">
        <input
          type="password"
          placeholder="Confirm password"
          className="input-field"
        />
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter restaurant name"
          className="input-field"
        />
      </div>

      <div className="input-wrapper">
        <input type="text" placeholder="Enter city" className="input-field" />
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter full address"
          className="input-field"
        />
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter contact number"
          className="input-field"
        />
      </div>

      <div className="input-wrapper">
        <button className="button">Sign Up</button>
      </div>
    </>
  );
};

export default RestaurantSignup;
