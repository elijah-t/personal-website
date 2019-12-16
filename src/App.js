import React from 'react';
import 'bulma/css/bulma.css'
import './App.css'

import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import About from './components/About.js'

function App() {
  return (
    <div className="bg">
      <Navbar />
      <br/>
      <Home />
    </div>
  );
}

export default App;
