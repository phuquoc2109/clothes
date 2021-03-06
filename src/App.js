import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ScrollButton from "./components/ScrollButton";
import Accessories from "./pages/Accessories";
import AccessoryDetail from "./pages/AccessoryDetail";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Search from "./pages/Search";
import NotFound from "./components/NotFound"
import ScrollToTop from "./components/ScrollToTop";

function App() {
 
  return (
    <div className="App">
      <BrowserRouter >
        <Fragment>
          <ScrollToTop />
            <Switch>
              <Route path="/" exact><Home /></Route>  
              <Route path="/catalog" exact><Catalog /></Route> 
              <Route path="/catalog/:slug"><Product /></Route> 
              <Route path="/cart" exact><Cart /></Route> 
              <Route path="/cart/checkout"><Checkout /></Route> 
              <Route path="/accessories" exact><Accessories /></Route>
              <Route path="/accessories/:slug"><AccessoryDetail /></Route> 
              <Route path="/contact"><Contact /></Route>
              <Route path="/search"><Search /></Route> 
              <Route><NotFound /></Route>
            </Switch>
        </Fragment>
        <ScrollButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
