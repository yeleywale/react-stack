import React from "react-dom"
import React2 from "react";
import App from "./components/App.jsx";
import injectTapEventPlugin from 'react-tap-event-plugin';
// require('./main.scss');

injectTapEventPlugin();
//Rendering the components here
// Specify the markup to Render and dom element where markup should be added to
var element = React2.createElement(App)
React.render(element, document.getElementById("container"))
