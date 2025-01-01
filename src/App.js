import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Registration from "./page/Registration";
import Home from "./page/Home";
import "./index.css";


const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation ou liens vers les pages */}
        <nav>
          <ul className="flex space-x-4 p-4 bg-gray-100">
            <li>
              <a href="/" className="text-blue-600 hover:underline">Home</a>
            </li>
            <li>
              <a href="/register" className="text-blue-600 hover:underline">Register</a>
            </li>
            <li>
              <a href="/login" className="text-blue-600 hover:underline">Login</a>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
