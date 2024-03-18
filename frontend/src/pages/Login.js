import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import { Link, useNavigate } from "react-router-dom";
import Validation from "./Loginvalidation";

export default function Login() {
    const [values, setValues] = useState({
        usertype: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (Object.keys(errors).length === 0 && errors.constructor === Object) {
            axios.post('http://localhost:3000/api/login', values)
                .then(res => {
                    if (res.data === "Success") {
                        navigate('/homepage')
                    } else {
                        alert("No record exists");
                    }
                })
                .catch(err => console.log(err))
        }
    }, [errors]);

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    };
    const handleRegisterClick = () => {
        history.push('/register'); // Navigate to /register when the button is clicked
    };

    return (
        <div className="bg-gradient-to-r from-indigo-900 to-indigo-950">
            <div className="loginbox">
                <div className="flex justify-center items-center h-screen">
                    <div className="w-full max-w-md p-6 bg-indigo-200 rounded-lg shadow-lg">
                        <h4 className="text-4xl font-semibold text-center mb-4">Login</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 flex items-center">
                                <label htmlFor="patient" className="block text-sm text-gray-600 mx-2">Patient</label>
                                <input
                                    type="radio"
                                    id="patient"
                                    name="usertype"
                                    value="patient"
                                    className="mr-2 form-radio rounded-full text-blue-500"
                                    onChange={handleInput}
                                />
                                <label htmlFor="doctor" className="block text-sm text-gray-600 mx-2">Doctor</label>
                                <input
                                    type="radio"
                                    id="doctor"
                                    name="usertype"
                                    value="doctor"
                                    className="form-radio rounded-full text-blue-500"
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm text-gray-600">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                    name="email"
                                    autoComplete="off"
                                    onChange={handleInput}
                                />
                                {errors.email && <span>{errors.email}</span>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm text-gray-600">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                    name="password"
                                    id="password"
                                    onChange={handleInput}
                                />
                                {errors.password && <span>{errors.password}</span>}
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                            >
                                Login
                            </button>
                            <p className="text-center text-gray-500 mt-4">Sign up to your account</p>
                            <button
                                onClick={handleRegisterClick} 
                                className="w-full mt-2 bg-blue-300 text-white py-2 px-4 rounded-md hover:bg-gray-300 transition-all duration-200 hover:text-black focus:outline-none focus:ring focus:ring-gray-200"
                            >
                                Register New Account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}