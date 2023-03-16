import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Description from "./Description"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Description />
      <Outlet />

    </div>
  );
}

export default App;
