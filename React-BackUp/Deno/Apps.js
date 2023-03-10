import React from "react";
import "./App.css";
import Create from "./My-Data/SAM/CRUD_OP/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Read from "./My-Data/SAM/CRUD_OP/Read";
import Update from "./My-Data/SAM/CRUD_OP/Update";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
