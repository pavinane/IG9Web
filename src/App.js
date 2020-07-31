import React from 'react';
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Homepage from './App/Course/home_page';
import Login from './App/Course/Login';
import Signup from './App/Course/Signup';
import Mainpage from './App/Ig9.jsx/Main'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/" component={Homepage} />
            <Route exact path="/design" component={Homepage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/main-page" component={Mainpage} />
          </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
