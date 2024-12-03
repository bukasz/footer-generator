import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import DropdownMenu from './DropdownMenu';
import FormGenerator from './FormGenerator';

function App() {
  return (
    <div className="App">
      <Header />
      <DropdownMenu />
      <FormGenerator />
    </div>
  );
}

export default App;
