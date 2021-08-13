import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Accessories from "./pages/Accessories";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact><Home /></Route>  
          <Route path="/catalog" exact><Catalog /></Route> 
          <Route path="/catalog/:slug"><Product /></Route> 
          <Route path="/cart"><Cart /></Route> 
          <Route path="/accessories"><Accessories /></Route> 
          <Route path="/contact"><Contact /></Route> 
        </Switch>  
      </BrowserRouter>
    </div>
  );
}

export default App;
