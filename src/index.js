import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ******** MY IMPORTS *******

// creating store using redux
import { createStore } from "redux";

// Provider from "react-redux" links the stoe the the react-components
// this wraps the route component allowing us to pass in the store as a property, which "PROVIDES" our react appplication with the STORE(i.e. making it accessible)
import { Provider } from "react-redux";

// import reducer, to enable us interact with the store
import rootReducer from "./reducers/rootReducer";

// passing in reducer into function
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
