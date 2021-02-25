import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Nav, Navbar, Image } from "react-bootstrap";

//Pages
import Home from './screens/Home/Home'
import Login from "./screens/Login/Login"
import LogOut from "./screens/LogOut/logOut"
function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={LogOut} />
      </Switch>
      
    </Router>
  )
}

export default App
