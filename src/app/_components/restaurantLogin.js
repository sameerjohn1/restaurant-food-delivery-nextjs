const RestaurantLogin = () => {
  return (
    <>
      <h3 className="form-title">Login</h3>

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
        <button className="button">Login</button>
      </div>
    </>
  );
};

export default RestaurantLogin;
