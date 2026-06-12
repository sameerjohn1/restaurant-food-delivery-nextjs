import Link from "next/link";

const RestaurantHeader = () => {
  return (
    <div className="header">
      <div className="logo">
        <img style={{ width: 100 }} src="logo.jpg" alt="logo" />{" "}
      </div>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>Login/Signup</Link>
        </li>
        <li>
          <Link href={"/"}>Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default RestaurantHeader;
