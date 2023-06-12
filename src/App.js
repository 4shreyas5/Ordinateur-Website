import React from "react";
import HomePage from "./Containers/HomePage";
import Events from "./Containers/events";
import Faculty from './Containers/Faculty';
import AboutUs from './Containers/about-us';
import ForStudents from "./Containers/for_students";
import Guidlines from "./Components/guidlines";
import Guidlines2 from "./Components/guidlines2";
import Guidlines3 from "./Components/guidlines3";
import Resources from "./Components/resources";
import Resources2 from "./Components/resources2";
import Resources3 from "./Components/resources3";


import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {  
return( 

  <div className="App">
  <BrowserRouter>
  <Routes>
  <Route path='/' element = {<HomePage/>}></Route> 
  <Route path='/home' element = {<HomePage/>}></Route> 
  <Route path='/events' element = {<Events/>}></Route>
  <Route path='/faculty' element = {<Faculty/>}></Route> 
  <Route path='/aboutus' element = {<AboutUs/>}></Route>   
  <Route path='/for_students' element = {<ForStudents/>}></Route> 
  <Route path='/guidlines' element = {<Guidlines/>}></Route> 
  <Route path='/guidlines2' element = {<Guidlines2/>}></Route> 
  <Route path='/guidlines3' element = {<Guidlines3/>}></Route> 
  <Route path='/resources' element = {<Resources/>}></Route>
  <Route path='/resources2' element = {<Resources2/>}></Route>
  <Route path='/resources3' element = {<Resources3/>}></Route>

  </Routes>
  </BrowserRouter>
  </div>
)

}

export default App;
