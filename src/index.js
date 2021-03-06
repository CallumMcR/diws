import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Home,
  About,
  Contact,
  Recipes,
  Recipe,
  CreateRecipe,
  PrintRecipe 
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/recipes/" element={<Recipes />} />
      <Route exact path="recipes/recipe/:uuid" element={<Recipe />} />
      <Route path="recipes/CreateRecipe/" element={<CreateRecipe />} />
      <Route path="recipes/recipe/print/" element={<PrintRecipe  />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
