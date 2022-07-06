import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/index'
import TrackPage from './pages/TrackPage';
import About from './pages/About';
import Login from './pages/Login';
import Impressum from './pages/Impressum';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router basename="/">
      <Route exact path='/rojorecords-website' component={Home} />
      <Route path='/home' component={Home} />
      <Route exact path='/' component={Home} />
      <Route path='/tracklist' component={TrackPage} />
      <Route path='/about' component={About} />
      <Route path='/signin' component={Login} />
      <Route path='/impressum' component={Impressum} />
      <Route path='/datenschutz' component={Privacy} />
      <Route path='/privacy' component={Privacy} />
    </Router>
  );
}

export default App;
