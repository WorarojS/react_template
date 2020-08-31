import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Example2 } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`} render={() => <Home />} />
        <Route exact path={`/example2`} render={() => <Example2 />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
