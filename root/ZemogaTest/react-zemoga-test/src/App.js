import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
//import { Switch} from 'react-router';
import './App.css';
import Home from './Home';


function App() 
{
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
