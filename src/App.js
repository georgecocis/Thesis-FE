import React from "react";
  import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home'
import Beer from "./beer/Beer";
import "./App.css"


function App() {
  return (
 <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/beer" element={<Beer/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
  