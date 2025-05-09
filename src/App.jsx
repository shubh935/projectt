import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Companies from "./Components/Compnies";
// import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/compnies" element={<Companies />} />
        {/* <Route path="/hero" element={<HeroSection />} />{" "} */}

        {/* Define a route for the Body component */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Companies/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
