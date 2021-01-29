import React from 'react';
import './App.css';
import {Switch , Route} from "react-router-dom";
import Navbar from './Navbar/nav';
import ad from './ad/ad';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
<>
<Navbar/>
<Switch>
  <Route path="/" exact component={ad}/>
</Switch>
</>
  );
}

export default App;
