import React from 'react';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
      <Routes>
        <Route path='/' element={<h1><Homepage/></h1>}/>
        <Route path='/learn' element={<h1>Learnpage</h1>}/>
        <Route path='/refrence' element={<h1>refrencepage</h1>}/>
        <Route path='/community' element={<h1>communitypage</h1>}/>
        <Route path='/ourcommunity' element={<h1>Our communitypage</h1>}/>
        <Route path='/mycommunity' element={<h1>My communitypage</h1>}/>
        <Route path='/blog' element={<h1>blogpage</h1>}/>
        <Route path='/git' element={<h1>gitpage</h1>}/>
        <Route path='/github' element={<h1>githubpage</h1>}/>
        <Route path='/register' element={<h1>registerpage</h1>}/>
      

      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
