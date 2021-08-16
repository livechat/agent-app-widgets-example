import React from 'react';
import { Route } from 'wouter';
import './App.css';
import CustomerDetails from './pages/CustomerDetails';
import FullScreen from './pages/FullScreen';
import MessageBox from './pages/MessageBox';

import AppRoute from './routes';

function App(): JSX.Element {
  return (
    <div className="App">
      <Route path={AppRoute.CustomerDetails} component={CustomerDetails} />
      <Route path={AppRoute.MessageBox} component={MessageBox} />
      <Route path={AppRoute.Fullscreen} component={FullScreen} />
    </div>
  );
}

export default App;
