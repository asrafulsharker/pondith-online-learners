import React,{useState,useEffect,useRef} from 'react';
import lottie from 'lottie-web';
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
  const  [loading, setLoading] = useState(false);
  const container = useRef(null)

  useEffect(()=>{
      lottie.loadAnimation({
          container:container.current,
          renderer:'svg',
          loop:true,
          autoplay:true,
          animationData: require('./ani1.json')
      })
  },[]);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },8000)
  },[]);

  return (
    <>
        {
      loading ? ( 
    <>
            <div className="" style={{height:"100px"}} ref={container}></div>
            <p>hi</p>
    </>
      ) :(
        <div>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/auth" exact component={Auth}/>
        </Switch>
        </div>
      )
    }
    </>


  );
}

export default App;
