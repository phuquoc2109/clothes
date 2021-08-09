import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Accessories from "./pages/Accessories";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact><Home /></Route>  
          <Route path="/catalog"><Catalog /></Route> 
          <Route path="/accessories"><Accessories /></Route> 
          <Route path="/contact"><Contact /></Route> 
        </Switch>  
      </BrowserRouter>
    </div>
  );
}

export default App;
