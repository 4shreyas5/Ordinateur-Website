import React from "react";
import HomePage from "./Containers/HomePage";
import Events from "./Components/events";
import Alumni from "./Components/alumni";
import Forms from "./Containers/Forms";
import Faculty from './Components/Faculty';
import AboutUs from './Components/about-us';
import ForStudents from "./Components/for_students";
import SignUp from "./Containers/SignUp";
import SignIn from './Components/sign-in';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
return(

  <div className="App">
  <BrowserRouter>
  <Routes>
  <Route path='/' element = {<HomePage/>}></Route> 
  <Route path='/home' element = {<HomePage/>}></Route> 
  <Route path='/events' element = {<Events/>}></Route>
  <Route path='/alumni' element = {<Alumni/>}></Route>
  <Route path='/forms' element = {<Forms/>}></Route> 
  <Route path='/faculty' element = {<Faculty/>}></Route> 
  <Route path='/aboutus' element = {<AboutUs/>}></Route>   
  <Route path='/for_students' element = {<ForStudents/>}></Route> 
  <Route path='/signin' element = {<SignIn/>}></Route> 
  <Route path='/signup' element = {<SignUp/>}></Route> 
  
  </Routes>
  </BrowserRouter>
  </div>
)

}

export default App;
