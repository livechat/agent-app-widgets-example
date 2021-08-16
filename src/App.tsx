import React from 'react';
import { Route } from 'wouter';
import CustomerDetailsWidget from './pages/customer-details-widget/CustomerDetailsWidget';
import './App.css';
import MessageBoxWidget from './pages/messagebox-widget/MessageBoxWidget';
import Permissions from './pages/permissions/Permissions';
import Tiles from './pages/tiles/Tiles';
import AppRoute from './routes';
import CounterBadge from './pages/counter-badge/CounterBadge';

function App(): JSX.Element {
  return (
    <div className="App">
      <Route path={AppRoute.CustomerProile} component={CustomerDetailsWidget} />
      <Route path={AppRoute.RichMessages} component={MessageBoxWidget} />
      <Route path={AppRoute.Permissions} component={Permissions} />
      <Route path={AppRoute.CounterBadge} component={CounterBadge} />
      <Route path={AppRoute.Tiles} component={Tiles} />
    </div>
  );
}

export default App;
