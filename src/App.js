import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//Pages
import Home from './screens/Home/Home'


function App() {
  return (
    <Router>

      <Switch>

        <Route path="/" component={Home} />

      </Switch>
    </Router>
  )
}

export default App
