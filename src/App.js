import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Header from './parts/Header/Header';
import Events from './pages/Events';
import Groups from './pages/Groups';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <React.Fragment>
          <div className="container-fluid ">
            {/* <Header /> */}
            <Events />
            <Switch>
              <Route path="/" exact />
              <Route path="/events" component={Events} />
              <Route path="/groups" component={Groups} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
