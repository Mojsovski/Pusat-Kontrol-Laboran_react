import Router from "./router/RouterSetting";
import React from "react";
import { Provider } from "react-redux";
import store from "../src/store/store";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
