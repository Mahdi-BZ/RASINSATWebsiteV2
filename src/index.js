import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import ReactGA from 'react-ga';
ReactGA.initialize('233487014'); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.querySelector("#root"));
