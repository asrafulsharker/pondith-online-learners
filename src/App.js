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
import Loading from './loading';


function App() {


  const [cat, setCat] = useState('');
  const [loading, setLoading] = useState(undefined);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    getCat();
  }, []);

  const getCat = () => {
    setLoading(undefined);
    setDone(undefined);

    setTimeout(() => {
      fetch('https://aws.random.cat/meo')
      .then(res => res.json())
      .then(data => {
        setCat(data.file);
        setLoading(true);
        setTimeout(() => {
          setDone(true);
        }, 1000)
      })
      .catch(err => console.log(err));
    }, 1200);
  }



  // const  [loading, setLoading] = useState(false);
  // const container = useRef(null)

  // useEffect(()=>{
  //     lottie.loadAnimation({
  //         container:container.current,
  //         renderer:'svg',
  //         loop:true,
  //         autoplay:true,
  //         animationData: require('./ani1.json')
  //     })
  // },[]);

  // useEffect(()=>{
  //   setLoading(true)
  //   setTimeout(()=>{
  //     setLoading(false)
  //   },11000)
  // },[]);

  return (
    // <>
    //     {
    //   loading ? ( 
    // <div className="App">
    // {!done?(
    //   <Loading loading={loading}/>
    //   ) :(
    //     <div>
    //     <Navbar/>
    //     <Switch>
    //       <Route path="/" exact component={Home}/>
    //       <Route path="/auth" exact component={Auth}/>
    //     </Switch>
    //     </div>
    //   )
    // }
    // </>
    <div className="App">
      {!done?(
        <Loading loading={loading}/>
      ):(
                <div>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/auth" exact component={Auth}/>
        </Switch>
        </div>
      )}
    </div>


  );
}

export default App;
