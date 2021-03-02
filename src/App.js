import React from 'react';
import './App.css';
import {Switch , Route} from "react-router-dom";
import Navbar from './Navbar/nav';
import Ad from './ad/ad';
import Auth from './authentication/authentication';
import Home from './Home/home';
import Categories from './categories/categories';
import {ThemeProvider} from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
<>
<Navbar/>
<Switch>
  <Route path="/" exact component={Home}/>
  <Route path="/auth" exact component={Auth}/>
</Switch>
</>
  );
}

export default App;
