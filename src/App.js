import React from 'react';
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

import Navbar from "./screens/Components/Navbar/NavbarComponent"


function App() {

  return (
    <Router>
 <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={LogOut} />
      </Switch>
      
    </Router>
  )
}

export default App
