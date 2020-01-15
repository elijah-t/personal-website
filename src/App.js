import React from 'react';
import { BrowserRouter as Router, Route }  from 'react-router-dom'
import 'bulma/css/bulma.css'
import './App.css'

import Home from './components/Home.js'
import About from './components/About.js'
import Contact from './components/Contact.js'

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
