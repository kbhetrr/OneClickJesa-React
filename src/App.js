import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Write from "./pages/Write/Write";
import Info from "./pages/Info/Info";
import About from "./pages/About/About";
import Navigation from "./Components/Navigation";

import Footer from "./Components/Footer";

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
    </div>
  );
};

export default App;
