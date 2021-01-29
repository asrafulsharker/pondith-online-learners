import React from 'react';
import './App.css';
import {Switch , Route} from "react-router-dom";
import Navbar from './Navbar/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
<>
<Switch>
  <Route path="/" exact component={Navbar}/>
</Switch>
</>
  );
}

export default App;
