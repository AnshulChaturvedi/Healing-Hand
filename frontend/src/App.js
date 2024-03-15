import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"; 
import ConsultDoctor from "./pages/ConsultDoctor"; 
import Healthcare from "./pages/Healthcare"; 
import Labtest from "./pages/Labtest"; 
import Login from "./pages/Login";
import Medicines from "./pages/Medicines"; 
import Register from "./pages/Register"; 
import Wellness from "./pages/Wellness"; 
import Homepage from "./pages/Homepage"; 

export default function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/consultdoctor' element={<ConsultDoctor />} />
          <Route path='/healthcare' element={<Healthcare />} />
          <Route path='/labtest' element={<Labtest />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/medicines' element={<Medicines />} />
          <Route path='/wellness' element={<Wellness />} />
        </Routes>
      </div>
    </Router>
  );
}
