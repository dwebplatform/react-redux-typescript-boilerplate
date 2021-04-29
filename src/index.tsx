import * as React from "react";
import { render } from "react-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "./rootReducer";
import { useModifiedSelector } from "./modifiedHooks";
import { App } from "./App";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
