import React from 'react';
import Logo from './components/Logo/Logo';
import { DropDown } from './components/Dropdown/Dropdown';
import './App.css';



function App() {
  return (
    <div className="App">
      < Logo />
      <h1>Zanoah: The place for Arts, Gaming and Tech </h1>
      < DropDown/>
    </div>
  );
}

export default App;
