import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import WithoutLogin from "./Components/WithoutLogin";
import WithLogin from "./Components/WithLogin";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import PageNotFound from "./Components/PageNotFound";
// import AllNav from "./Components/AllNav";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithoutLogin />}>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />

        <Route element={<WithLogin />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
