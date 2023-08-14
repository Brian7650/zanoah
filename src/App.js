import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo/Logo';
import './App.css';
import  Home from './components/Pages/Home';
import  Art from './components/Pages/Art';
import  News from './components/Pages/News';
import  Tech from './components/Pages/Tech';
import  Gaming from './components/Pages/Gaming';


function App() {
  return (
    <div className="App">  
    <Logo />
      <Router>
    <Navbar />

 
        <Routes>
          <Route path='/' element={Home} />
          <Route path='/News' element={News} />
          <Route path='/Gaming' element={Gaming} />
          <Route path='/Tech' element={Tech} />
          <Route path='/Art' element={Art} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
