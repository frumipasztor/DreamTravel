import React from "react";
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
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
        <HashRouter>
          <Route path="/" exact component={Home} />
          <Route path="/#/about"  component={About} />
          <Route path="/#/contact"  component={ContactPage} />
          <Route path="/#/blog"  component={BlogPage} />
          <Route path="/#/tour"  component={Tour} />
          <Route path="/#/booking"  component={BookingPage} />
          <Route path="/#/history" component={HistoryPage} />
          <Route path="/#/sights"  component={SightsPage} />
        </HashRouter>
      </Router>
    </>
  );
}

export default App;
