import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './Pages/Home';
import Contact from './Pages/Contact'
// import NotFound from './Pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/contact" component={ Contact } />
        {/* <Route exact path="/404" component={ NotFound } />
        <Redirect to="/404" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
