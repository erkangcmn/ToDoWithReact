import React, { useEffect,useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Pages
import Home from './screens/Home/Home'
import Login from "./screens/Authenticate/Login/Login"
import LogOut from "./screens/Authenticate/LogOut/logOut"
import Register from "./screens/Authenticate/Register/Register"


function App() {
 

  return (
    <Router>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={LogOut} />
        <Route path="/register" component={Register} />
      </Switch>

    </Router>
  )
}

export default App
