import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h3>Healing Hand</h3>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/medicines">Medicines</Link>
        </li>
        <li>
          <Link to="/consultdoctor">Consult doctor</Link>
        </li>
        <li>
          <Link to="/labtest">Lab test</Link>
        </li>
        <li>
          <Link to="/wellness">Wellness</Link>
        </li>
        <li>
          <Link to="/healthcare">Health care</Link>
        </li>
        <li>
          <Link to="/login">Login/signup</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;