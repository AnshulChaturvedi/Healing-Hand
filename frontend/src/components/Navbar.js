import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4">
    <div className="relative w-[1080p] mx-auto flex items-center justify-between">
        <div className="text-white font-bold hover:text-blue-500 cursor-pointer transition-all duration-200 relative group">
            <Link to="/">Healing Hand</Link>
            <div className="absolute bottom-0 w-full h-0.5 bg-blue-500 hidden group-hover:block transition-all duration-200"></div>
        </div>
        <ul className="flex space-x-6">
            <li className="text-white font-medium hover:text-blue-500 cursor-pointer transition-all duration-200 relative group">
                <Link to="/Medicines">Medicines</Link>
                <div className="absolute bottom-0 w-full h-1 bg-blue-500 hidden group-hover:block transition-all duration-200"></div>
            </li>
            <li className="text-white font-medium hover:text-blue-500 cursor-pointer transition-all duration-200 relative group">
                <Link to="/consultdoctor">Consult Doctor</Link>
                <div className="absolute bottom-0 w-full h-1 bg-blue-500 hidden group-hover:block transition-all duration-200"></div>
            </li>
            <li className="text-white font-medium hover:text-blue-500 cursor-pointer transition-all duration-200 relative group">
                <Link to="/labtest">Lab Test</Link>
                <div className="absolute bottom-0 w-full h-1 bg-blue-500 hidden group-hover:block transition-all duration-200"></div>
            </li>
            <li className="text-white font-medium hover:text-blue-500 cursor-pointer transition-all duration-200 relative group">
                <Link to="/wellness">Wellness</Link>
                <div className="absolute bottom-0 w-full h-1 bg-blue-500 hidden group-hover:block transition-all duration-200"></div>
            </li>
            <li className="text-white font-medium hover:text-blue-500 cursor-pointer transition-all duration-200 relative group">
                <Link to="/healthcare">Health Care</Link>
                <div className="absolute bottom-0 w-full h-1 bg-blue-500 hidden group-hover:block transition-all duration-200"></div>
            </li>
        </ul>
        <div className="flex space-x-6">
            {/* Redirect to login page */}
            <Link to="/login">
                <button className="py-3 px-5 text-white border-blue-500 border rounded-sm text-sm font-bold">Log in</button>
            </Link>
            <Link to="/register">
                <button className="py-3 px-4 font-bold rounded-sm bg-white text-blue-300 border transition-all duration-200 hover:text-blue-500">Register</button>
            </Link>
        </div>
    </div>
</nav>

  );
};

export default Navbar;
