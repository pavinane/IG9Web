import React from 'react';
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Homepage from './App/Course/home_page';
import Login from './App/Course/Login';
import Signup from './App/Course/Signup';
import Mainpage from './App/Ig9/Main';
// import Slider from './App/Slider/slider';
// import Index from './App/Bootstrap/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          
            <Route exact path="/" component={Homepage} />
            <Route exact path="/design" component={Homepage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/mainpage" component={Mainpage} /> 
            <Route exact path="/mainpage" component={Mainpage} />
             <Route exact path="/mainpage/intermediate" component={Mainpage} />
            <Route exact path="/mainpage/adobemuse" component={Mainpage} /> 
            <Route exact path="/mainpage" component={Mainpage} />
             <Route exact path="/mainpage/new" component={Mainpage} />
            <Route exact path="/mainpage/advantage" component={Mainpage} />
            {/* <Route exact path="/slider" component={Slider} />   */}
            {/* <Route exact path="/" component={Index} /> */}
          </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
