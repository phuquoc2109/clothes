import React from "react";
import Home from "./components/Home";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />  
      </BrowserRouter>
    </div>
  );
}

export default App;
