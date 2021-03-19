import React, { FC } from "react";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../store";
import Home from "./pages/Home";

const App:FC = () => {

  const history = createBrowserHistory();

  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Home />
        </div>
      </Router>
    </Provider>
  );
}

export default App;