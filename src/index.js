import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-39719885-1'); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.querySelector("#root"));
