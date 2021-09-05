import React from 'react';
import Landing from './pages/Landing';
import ShopPage from './pages/ShopPage';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import ServicesPage from './pages/ServicesPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from './pages/Aboutpage';
function App() {
  return (
    <>
      
      <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Landing}/>
          <Route path='/shop' exact component={ShopPage}/>
          <Route path='/aboutpage' exact component={AboutPage} />
          <Route path='/servicespage' exact component={ServicesPage} />
        </Switch>
       <Contact /> 
      </Router>
    </>
  );
}

export default App;
