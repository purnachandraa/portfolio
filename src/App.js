import React from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route,Switch, } from 'react-router-dom';
import './App.css';
import Home from './home/home';
import About from './about/about';
import Myprofile from './myprofile/myprofile';

import Myskills from './myskills/myskills';


function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/home" component = {Home}/>
     <Route path="/about" component= {About}/>
     <Route path="/myskills" component = {Myskills}/>
     <Route path="/myprofile" component = {Myprofile}/>
     
    
   </Switch>
   </BrowserRouter>
  );
}

export default App;
