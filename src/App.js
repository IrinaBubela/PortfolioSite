import React from 'react';
import './App.scss';
import { HashRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NavbarComponent from './layouts/Navbar';



function App() {
  return (
    <div className="App">
      <HashRouter basename='/'>
        <div>
          <NavbarComponent />
          <Switch>
            <Route path='/' exact component={MainPage} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
