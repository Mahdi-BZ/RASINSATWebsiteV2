import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Awards from "./Awards";
import Activities from "./Activities";
import Projects from "./Projects";
import Header from "./Header";
import Footer from "./Footer";
import Community from "./Community";
import Activity from "./Activity";
import NotFound from "./NotFound";
import ScrollToTop from "./ScrollToTop";
import ResponsiveNavBar from "./ResponsiveNavBar";

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <ResponsiveNavBar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/awards" exact component={Awards} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/activities" exact component={Activities} />
          <Route path="/community" exact component={Community} />
          <Route path="/activities/:id" exact component={Activity} />
          <Route path="*" exact component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
