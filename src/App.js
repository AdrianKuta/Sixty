import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './screens/Home/Home';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
