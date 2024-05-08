import React from "react";
import { Routes, Route } from "react-router-dom";
import PreLoader from "./components/PreLoader";
import HomePage from "./components/Homepage/HomePage";
import Navbar from "./components/Navbar";
import Charecters from "./components/Charecters/Charecters";
import Myself from "./components/Myself";
import Creator from "./components/Creator";
import ContactMe from "./components/ContactMe";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import Burger from "./components/Burger";

const App = () => {
  const isSmallDevice = useMediaQuery({ maxWidth: 767.98 });
  return (
    <div className="App">
      <PreLoader />
      {isSmallDevice ? <Burger /> : <Navbar />}
      <div className="pages">
        <Routes>
          <Route path="/charecters" exact element={<Charecters />} />
          <Route path="/creator" exact element={<Creator />} />
          <Route path="/myself" exact element={<Myself />} />
          <Route path="/contactme" exact element={<ContactMe />} />
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
