import React from 'react';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import SideBar from './components/Sidebar/Sidebar';
import './App.css';



function App() {
  return (
    <div className="App">
      <Logo />
      <Navigation />
      <h1>Zanoah: The place for Arts, Gaming and Tech </h1>
      <SideBar />

    </div>
  );
}

export default App;
