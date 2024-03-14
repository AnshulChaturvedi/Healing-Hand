import React from 'react';
import React, { useState } from "react";

const DoctorDirectory = () => {
    const [selectedLocation, setSelectedLocation] = useState("");
    const [neurologistDetailsVisible, setNeurologistDetailsVisible] = useState(false);
    const [physicianDetailsVisible, setPhysicianDetailsVisible] = useState(false);

    const handleLocationChange = (location) => {
        setSelectedLocation(location);
    };

    const toggleNeurologistDetails = () => {
        setNeurologistDetailsVisible(!neurologistDetailsVisible);
    };

    const togglePhysicianDetails = () => {
        setPhysicianDetailsVisible(!physicianDetailsVisible);
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="bg-blue-900 p-4">
                <div className="relative w-[1080p] mx-auto flex items-center justify-between">
                    <div className="text-white font-bold hover:text-blue-500 cursor-pointer transition-all duration-200 relative group">
                        <a href="#">Healing Hand</a>
                        <div className="absolute bottom-0 w-full h-0.5 bg-blue-500 hidden group-hover:block transition-all duration-200"></div>
                       </div>
                    <ul className="flex space-x-6">
                        <li className="text-white font-medium hover:text-blue-500 cursor-pointer transition-all duration-200 relative group">
                             <a href="#">Medicines</a>
                             <div className="absolute bottom-0 w-full h-1 bg-blue-500 hidden group-hover:block transition-all duration-200"></div>
                        </li>
                        <li className="text-white font-medium hover:text-blue-500 cursor-pointer transition-all duration-200 relative group">
                             <a href="#">Consult Doctor</a>
                             <div className="absolute bottom-0 w-full h-1 bg-blue-500 hidden group-hover:block transition-all duration-200"></div>
                        </li>
                        <li className="text-white font-medium hover:text-blue-500 cursor-pointer transition-all duration-200 relative group">
                             <a href="#">Lab Test</a>
                             <div className="absolute bottom-0 w-full h-1 bg-blue-500 hidden group-hover:block transition-all duration-200"></div>
                        </li>
                        <li className="text-white font-medium hover:text-blue-500 cursor-pointer transition-all duration-200 relative group">
                             <a href="#">Wellness</a>
                             <div className="absolute bottom-0 w-full h-1 bg-blue-500 hidden group-hover:block transition-all duration-200"></div>
                        </li>
                            <li className="text-white font-medium hover:text-blue-500 cursor-pointer transition-all duration-200 relative group">
                            <a href="#">Health Care</a>
                            <div className="absolute bottom-0 w-full h-1 bg-blue-500 hidden group-hover:block transition-all duration-200"></div>
                        </li>
                    </ul>
                    <div className="flex space-x-6">
                        <button className="py-3 px-5 text-white border-blue-500 border rounded-sm text-sm font-bold">Log in</button>
                        <button className="py-3 px-4 font-bold rounded-sm bg-white text-blue-300 border transition-all duration-200 hover:text-blue-500">Register</button>
                    </div>
                    </div>
            </nav>

            {/* Image section */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                    {/* Example image section */}
                    <div className="mt-8">
                        <h2>Title of Image</h2> {/* Add your title here */}
                        <img src="C:\Users\hp\Downloads\WhatsApp Image 2024-03-14 at 8.25.57 PM.jpeg" alt="Sample Image" className="w-full h-[500px] rounded-lg shadow-md" />
                    </div>
                    </div>

                    <div className="flex items-center justify-between">
                        
                <div className="w-1/3 mx-auto p-4 flex-col">
                            {/* filterdoctor */}
                        <div className="container mx-auto p-4">
                          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                          <h3 className="text-lg text-blue-600 font-semibold">Filter doctors by specialization</h3>
                           <select id="specializationSelect" className="mt-2 p-2 border rounded">
                            <option value="">Select Specialization</option>
                            <option value="neurologist">Neurologist</option>
                            <option value="generalPhysician">General Physician</option>
                         </select>
                        </div>
                    </div>
                     {/* findlocation */}
                   <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                     <div className="bg-white p-4 mx-auto">
                         <h3 className="text-lg font-semibold">Find doctors by location</h3>
                          <div className="mt-2">
                            <a href="#" onClick={() => handleLocationChange('Location1')} className="text-blue-500 hover:underline">Phaphamau, Prayagraj</a><br />
                            <a href="#" onClick={() => handleLocationChange('Location2')} className="text-blue-500 hover:underline">Teliarganj, Prayagraj</a><br />
                            <a href="#" onClick={() => handleLocationChange('Location3')} className="text-blue-500 hover:underline">Civil Lines, Prayagraj</a>
                          </div>
                          <p id="selectedLocation" className="mt-2">{selectedLocation}</p>
                        </div>
                   </div>
                </div>
                {/* doctordetail */}
                <div className="w-2/3">
                     <div className="container mx-auto p-4">
                         <div className={`bg-white rounded-lg shadow-md p-4 mb-4 ${neurologistDetailsVisible ? '' : 'hidden'}`} id="neurologistDetails">

                             <h2 className="text-xl font-semibold mb-2">Neurologist</h2>
                         <div className="text-sm">
                         <p className="mb-1">Dr B K Singh</p>
                         <p className="mb-1">Works at XYZ Hospital</p>
                         <p>Contact details: +91 9908902331</p>
                       </div>
                    <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded" onClick={toggleNeurologistDetails}>Hide Details</button>
                    <div className="mt-2">
                        <h4 className="text-lg font-semibold">More Details</h4>
                        <p>Additional information goes here.</p>
                    </div>
                    </div>
                    <div className={`bg-white rounded-lg shadow-md p-4 mb-4 ${physicianDetailsVisible ? '' : 'hidden'}`} id="physicianDetails">

                    <h2 className="text-xl font-semibold mb-2">General Physician</h2>
                    <div className="text-sm">
                        <p className="mb-1">Dr Nirmal Agarwal</p>
                        <p className="mb-1">Works at ABC Hospital</p>
                        <p>Contact details: +91 9219474283</p>
                    </div>
                    <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded" onClick={togglePhysicianDetails}>Hide Details</button>
                    <div className="mt-2">
                        <h4 className="text-lg font-semibold">More Details</h4>
                        <p>Additional information goes here.</p>
                    </div>
                    </div>
                </div>
                </div>
             </div>
        </div>
    );
}

export default DoctorDirectory;