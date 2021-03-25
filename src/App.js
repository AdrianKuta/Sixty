import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Home } from './screens/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path={'/'} component={Home} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
