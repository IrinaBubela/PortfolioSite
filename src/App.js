import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NavbarComponent from './layouts/Navbar';



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavbarComponent />
          <Switch>
            <Route path='/' exact component={MainPage} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
