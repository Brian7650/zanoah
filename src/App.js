import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav/Navbar/Navbar';
import Navigation  from './components/Nav/Navigation/Navigation';
import Logo from './components/Nav/Logo/Logo';
import './App.css';
import  Home from './components/Pages/Home/Home';
import  Art from './components/Pages/Art/Art';
import  News from './components/Pages/News/News';
import  Tech from './components/Pages/Tech/Tech';
import  Gaming from './components/Pages/Gaming/Gaming';


function App() {
  return (
    <div className="App">  
     <Router>
      <Logo>
        <Navigation/>
      </Logo>
    <Navbar />

 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/News' element={<News />} />
          <Route path='/Gaming' element={<Gaming />} />
          <Route path='/Tech' element={<Tech />} />
          <Route path='/Art' element={<Art />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
