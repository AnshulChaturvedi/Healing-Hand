import React, { useState } from 'react';

const consultdoctor = () => {
  const [selectedTime, setSelectedTime] = useState('09:00 AM');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [age, setAge] = useState('');
  const [salutation, setSalutation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [spokenLanguages, setSpokenLanguages] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  }

  return (
    <div className="p-4 m-5 bg-slate-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4"> APPOINTMENT DETAILS</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="dateTime" className="block mb-1">Select Date Time</label>
          <select id="dateTime" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} className="w-full border border-gray-300 p-2">
            <option value="09:00 AM">09:00 AM</option>
            {/* <option value="09:00 AM">09:00 AM</option> */}
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="01:00 PM">01:00 PM</option>
            <option value="02:00 PM">02:00 PM</option>
            <option value="03:00 PM">03:00 PM</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-1">First Name</label>
          <input id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full border border-gray-300 p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-1">Last Name</label>
          <input id="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full border border-gray-300 p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block mb-1">Mobile Number</label>
          <input id="mobileNumber" type="tel" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="w-full border border-gray-300 p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block mb-1">Age</label>
          <input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} className="w-full border border-gray-300 p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="salutation" className="block mb-1">Salutation</label>
          <input id="salutation" type="text" value={salutation} onChange={(e) => setSalutation(e.target.value)} className="w-full border border-gray-300 p-2" />
        </div>
       
        <div className="mb-4">
          <label htmlFor="spokenLanguages" className="block mb-1">Spoken Languages</label>
          <input id="spokenLanguages" type="text" value={spokenLanguages} onChange={(e) => setSpokenLanguages(e.target.value)} className="w-full border border-gray-300 p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block mb-1">Gender</label>
          <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="w-full border border-gray-300 p-2">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit"
          className=" bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >Submit</button>
      </form>
    </div>
  );
}

export default consultdoctor;
