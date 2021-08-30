import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Write from "./pages/Write/Write";
import Info from "./pages/Info/Info";
import About from "./pages/About/About";
import Navigation from "./Components/Navigation";

import Footer from "./Components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/write" component={Write} />
        <Route path="/info" component={Info} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
      />
    </div>
  );
};

export default App;
