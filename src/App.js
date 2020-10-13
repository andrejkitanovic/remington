import React, { useState } from "react";
import "./App.scss";

import Main from "./containers/Main/Main";
import Login from "./containers/Login/Login";

import {BrowserRouter,Route,Switch} from 'react-router-dom'

function App() {
  // const [loggedIn, setLoggedIn] = useState(
  //   localStorage.getItem("jwToken") ? true : false
  // );

  // const logInHandler = () => {
  //   setLoggedIn(true);
  // }

  return (
    <div className="App">
      {/* {loggedIn? <Main /> : <Login logIn={logInHandler}/>} */}
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
