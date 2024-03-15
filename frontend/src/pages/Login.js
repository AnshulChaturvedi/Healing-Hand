import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="">
            <div className="bg-gradient-to-r from-indigo-900 to-indigo-950">
            <div className="loginbox">
                <div className="flex justify-center items-center h-screen">
                    <div className="w-full max-w-md p-6 bg-indigo-200 rounded-lg shadow-lg">
                        
                        <h4 className="text-4xl font-semibold text-center mb-4">Login</h4>
                        <form>
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
                                <label className="block text-sm text-gray-600" htmlFor="email"></label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                    name="email"
                                    autoComplete="off"
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
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                            >
                                Login
                            </button>
                            <p className="text-center text-gray-500 mt-4">Sign up to your account</p>
                            <button
                            className="w-full mt-2 bg-blue-300 text-white py-2 px-4 rounded-md hover:bg-gray-300 transition-all duration-200 hover:text-black focus:outline-none focus:ring focus:ring-gray-200"
                            >
                                Register New Account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    );
}

