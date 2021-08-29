import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Tour from "./pages/Tour";
import NavBar from "./components/NavBar/NavBar";
import BookingPage from "./pages/Booking";
import BlogPage from "./pages/BlogPage";
import HistoryPage from "./pages/History";
import SightsPage from "./pages/Sights";

const App = () => {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/DreamTravel/" exact component={Home} />
          <Route path="/DreamTravel/about"  component={About} />
          <Route path="/DreamTravel/contact"  component={ContactPage} />
          <Route path="/DreamTravel/blog"  component={BlogPage} />
          <Route path="/DreamTravel/tour"  component={Tour} />
          <Route path="/DreamTravel/booking"  component={BookingPage} />
          <Route path="/DreamTravel/history" component={HistoryPage} />
          <Route path="/DreamTravel/sights"  component={SightsPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
