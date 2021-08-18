import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Tour from "./pages/Tour";
import NavBar from "./components/NavBar/NavBar";
import BookingPage from "./pages/Booking";

const App = () => {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about"  component={About} />
          <Route path="/contact"  component={ContactPage} />
          <Route path="/tour"  component={Tour} />
          <Route path="/booking"  component={BookingPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
