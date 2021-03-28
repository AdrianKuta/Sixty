import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
import { initNavigation } from '@noriginmedia/react-spatial-navigation';

initNavigation({
  debug: false,
  visualDebug: false,
});

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </QueryClientProvider>
  );
}

export default App;
