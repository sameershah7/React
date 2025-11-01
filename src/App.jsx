import React from "react";
import { Routes, Route } from "react-router";

import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SearchFootballer from "./components/SearchFootballer_intro_hooks";
import AdmissionForm from "./AdmissionForm";
import ProjectsShowcase from "./components/ProjectsShowcase";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects">
          <Route index element={<ProjectsShowcase/>}/>
          <Route path="player" element={<SearchFootballer />} />
          <Route path="form" element={<AdmissionForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
