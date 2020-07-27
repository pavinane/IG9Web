import React from 'react';
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Homepage from './App/Course/home_page';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/" component={Homepage} />
            <Route exact path="/design" component={Homepage} />
          </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
