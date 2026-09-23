import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import MovieInfo from "./Pages/MovieInfo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element= {<Movies/>} />
        <Route path="/movieinfo/:id" element= {<MovieInfo/>}/> 
      </Routes>
    </Router>
  );
};

export default App;
