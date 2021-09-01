import React from 'react';
import Landing from './pages/Landing';
import Shop from './pages/Shop';
import Navbar from './components/Navbar';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from './pages/Aboutpage';
function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Landing}/>
          <Route path='/shop' exact component={Shop}/>
          <Route path='/aboutpage' exact component={AboutPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
