import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './componets/com_home/Navbar.js';
import Home from './screen/Home.js';
import MayOrder from './screen/MyOrder.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './componets/com_home/Footer.js';
import SignUp from './screen/SignUp.js';
import LogeIn from './screen/Log.js';
import { CartProvider } from './componets/com_home/ContextReducer.js';


function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MayOrder" element={<MayOrder />} />
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Logein" element={<LogeIn/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;   
