import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element= {<Movies movies={Movies}/>} />
      </Routes>
    </Router>
  );
};

export default App;
