import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./redux/store/configureStore";

const store = configureStore();

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./App", renderApp);
}

renderApp();
