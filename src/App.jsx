import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import SidePage from "./components/SidePage";

export default function App() {
  return (
    <div className="bg-[#151515] h-screen text-white">
      <SidePage />
        <Home />
        <About />
        <Profile />
        <Service />
        <Contact />
      </div>
  );
}
