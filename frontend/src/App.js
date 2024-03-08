import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from'./pages/Login.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signin' element={<Signin />}></Route>
     </Routes>
    </BrowserRouter>
     
  );
}

export default App;