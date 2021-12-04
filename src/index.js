import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"
import App from "./App"; // Importar reducer desde App es una mala práctica y no debe ser replicado. Aquí se utiliza con fines puramanete educativos y no cómo un modelo.
import reportWebVitals from "./reportWebVitals";
import {asyncMiddleware} from "./middlewares/async"
import {reducer} from "./features/todos"

const store = createStore(reducer, applyMiddleware(asyncMiddleware))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
