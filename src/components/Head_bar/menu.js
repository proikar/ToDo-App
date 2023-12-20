import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import TaskManager from "../TaskManager/TaskManager";
import Settings from "../settings/Settings";
import AboutUs from "../AboutUs/AboutUs";

import "./menu.css";

const Men = () => {
  return (
    <div>
      <nav>
        <ul className="topmenu">
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/Settings">Settings</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Me</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<TaskManager />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
};

export default Men;
