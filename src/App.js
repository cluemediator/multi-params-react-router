import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import Demo from './Demo';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h3>Multiple parameters - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/demo">Without Params</Link> (Path: /demo)
          </li>
          <li>
            <Link to="/demo/s1">Single Parameter</Link> (Path: /demo/s1)
          </li>
          <li>
            <Link to="/demo/s1/m2">Multiple Parameters</Link> (Path: /demo/s1/m2)
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/demo/:p1?/:p2?" component={Demo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
