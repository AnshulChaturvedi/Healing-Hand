import React, { useState, useEffect } from "react";
import axios from 'axios';
import { navigate } from "react-router-dom"; // Import navigate from react-router-dom
import Validation from "./Loginvalidation";

export default function Register() {
  const [values, setValues] = useState({
    usertype: '',
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      axios.post('http://localhost:3000/api/register', values)
      .then(res => {
        navigate('/login'); // Redirect after successful registration
      })
      .catch(err=> console.log(err));
    }
  }, [errors]); // Run effect when errors state changes

  return (
    <div className="bg-gradient-to-r from-indigo-900 to-indigo-950 flex justify-center items-center h-screen">
      <div className="bg-blue-200 p-6 rounded-lg shadow-lg max-w-sm w-full">
        <form onSubmit={handleSubmit}>
          <h4 className="text-4xl font-semibold text-center mb-4">Sign Up</h4>
          <div className="mb-4 flex items-center">
            <label className="block text-sm text-gray-600 mx-2" htmlFor="patient">
              <input 
                type="radio" 
                id="patient" 
                name="usertype" 
                value="patient" 
                className="mr-2 form-radio rounded-full text-blue-500"
                onChange={handleInput}
              />
              Patient
            </label>
            <label className="block text-sm text-gray-600 mx-2" htmlFor="doctor">
              <input 
                type="radio" 
                id="doctor" 
                name="usertype" 
                value="doctor" 
                className="form-radio rounded-full text-blue-500"
                onChange={handleInput}
              />
              Doctor
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-sm text-gray-600">First Name</label>
            <input 
              onChange={handleInput} 
              type="text" 
              id="firstname" 
              placeholder="First name" 
              autoComplete="off" 
              name="firstname" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
            />
            {errors.firstname && <span>{errors.firstname}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="lastname" className="block text-sm text-gray-600">Last Name</label>
            <input 
              onChange={handleInput} 
              type="text" 
              id="lastname" 
              placeholder="Last name" 
              autoComplete="off" 
              name="lastname" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
            />
            {errors.lastname && <span>{errors.lastname}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-600">Email</label>
            <input 
              onChange={handleInput} 
              type="email" 
              id="email" 
              placeholder="Email" 
              autoComplete="off" 
              name="email" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm text-gray-600">Password</label>
            <input 
              onChange={handleInput} 
              type="password" 
              id="password" 
              placeholder="Password" 
              name="password" 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
            />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-800 hover:text-black transition-all duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
