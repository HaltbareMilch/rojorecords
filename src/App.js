import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/index'
import TrackPage from './pages/TrackPage';

function App() {
  return (
    <Router >
      <Route exact path='/' component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/tracklist' component={TrackPage} />
    </Router>
  );
}

export default App;
