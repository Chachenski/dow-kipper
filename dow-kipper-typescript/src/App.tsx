import React from "react";
import Navbar from "./components/Navbar";
import Collections from "./components/Collections";
import Formsubmit from "./components/Formsubmit";
import Itemsubmit from "./components/Itemsubmit";
import User from "./components/User";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Inventory from "./components/Inventory";
import Signup from "./components/Signup";
import {Routes, Route} from 'react-router-dom';
import Settings from "./components/Settings";
import Login from "./components/Login";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/user" element={<User />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
