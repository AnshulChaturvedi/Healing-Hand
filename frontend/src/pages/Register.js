import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div>
          <form>
        <div>
          <label htmlFor="patient">Patient</label>
          <input type="checkbox" id="patient" />
          <label htmlFor="doctor">Doctor</label>
          <input type="checkbox" id="doctor" />
        </div>
        <div>
          <label htmlFor="username">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            autoComplete="off"
            name="First Name" />
        </div>
        <div>
          <label htmlFor="username">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            autoComplete="off"
            name="Last Name" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            id="password" />
        </div>
        {location.pathname === '/register' && (
          <button type="submit">Register</button>
        )}
      </form>
    </div>
  );
}  