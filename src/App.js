import React from 'react';
import './App.css';
import {Switch , Route} from "react-router-dom";
import Navbar from './Navbar/nav';
import Ad from './ad/ad';
import Home from './Home/home';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
<>
<Navbar/>
<Switch>
  <Route path="/" exact component={Home}/>
</Switch>
</>
  );
}

export default App;
