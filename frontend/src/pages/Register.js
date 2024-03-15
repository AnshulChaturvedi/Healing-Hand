import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
    return (
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-950 flex justify-center items-center h-screen">
      <div className="bg-blue-200 p-6 rounded-lg shadow-lg max-w-sm w-full">
    <form>
        <h4 className="text-4xl font-semibold text-center mb-4">Sign Up</h4>
        <div className="mb-4 flex items-center">
          <label className="block text-sm text-gray-600 mx-2" htmlFor="patient">
              <input type="radio" id="patient" name="select" className="mr-2 form-radio rounded-full text-blue-500"/>
              Patient
          </label>
          <label className="block text-sm text-gray-600 mx-2" htmlFor="doctor">
              <input type="radio" id="doctor" name="select" className=" form-radio rounded-full text-blue-500"/>
              Doctor
          </label>
      </div>
        <div className="mb-4">
          <label htmlFor="first name" className=" block text-sm text-gray-600 "></label>
          <input type="text" id="first name" placeholder="First name" autoComplete="off" name="First Name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-600" fr="last name"></label>
          <input
              type="Last Name"
              placeholder=" Last name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              name="Last Name"
              id="Last Name"
          />
      </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-600" htmlFor="email"></label>
          <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              name="email"
              id="email"
          />
      </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-600" htmlFor="password"></label>
          <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              name="password"
              id="password"
          />
      </div>
        {location.pathname === '/register' && (
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-800 hover:text-black transition-all duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
        )}
    </form>
  </div>

  </div>
);
}  